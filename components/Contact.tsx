import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { ensureGsap } from '../lib/gsap';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const targets = [headRef.current, infoRef.current, formRef.current].filter(
      Boolean
    ) as HTMLElement[];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-theme="dark"
      className="relative bg-ink text-paper overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-paper/60">
          07 / 07
        </div>

        <div ref={headRef} className="flex items-start gap-3 mb-14 md:mb-20">
          <h2
            className="font-display uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(72px, 12vw, 200px)' }}
          >
            /Contact
          </h2>
          <ArrowUpRight
            className="w-10 h-10 md:w-16 md:h-16 mt-2 md:mt-3 stroke-[1.25]"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div ref={infoRef} className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-base md:text-lg leading-relaxed text-paper/75 max-w-md">
              Got a project, a Flutter team to scale, or just want to talk shop? I read every
              message and reply within a day or two.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-md border border-paper/20 grid place-items-center text-paper/70">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">Email</p>
                  <a
                    href="mailto:dev@aminjafari.me"
                    className="text-paper hover:opacity-70 transition-opacity"
                  >
                    dev@aminjafari.me
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-md border border-paper/20 grid place-items-center text-paper/70">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">Phone</p>
                  <a
                    href="tel:+37493889073"
                    className="text-paper hover:opacity-70 transition-opacity"
                  >
                    (+374) 93 889 073
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-md border border-paper/20 grid place-items-center text-paper/70">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">Location</p>
                  <p className="text-paper">Yerevan, Armenia</p>
                </div>
              </li>
            </ul>

            <a
              href="mailto:dev@aminjafari.me"
              className="mt-2 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-paper/80 hover:text-paper transition-colors"
            >
              <span className="w-12 h-12 rounded-full border border-paper/30 grid place-items-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
              Send me a message
            </a>
          </div>

          <form
            ref={formRef}
            action="https://formsubmit.co/dev@aminjafari.me"
            method="POST"
            className="lg:col-span-7 border border-paper/15 rounded-2xl p-6 md:p-10 bg-paper/[0.02]"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-paper/25 focus:border-paper outline-none py-3 text-paper placeholder:text-paper/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-paper/25 focus:border-paper outline-none py-3 text-paper placeholder:text-paper/30 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-transparent border-b border-paper/25 focus:border-paper outline-none py-3 text-paper placeholder:text-paper/30 transition-colors"
                  placeholder="Collaboration / Job opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-paper/25 focus:border-paper outline-none py-3 text-paper placeholder:text-paper/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <input type="hidden" name="_next" value="https://aminjafari.me" />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-paper text-ink uppercase tracking-[0.25em] text-xs font-semibold hover:bg-paper-soft transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
