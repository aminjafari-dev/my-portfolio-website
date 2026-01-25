import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss Flutter development? I'm always open to new opportunities and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="space-y-8">
             <div className="bg-card/50 border border-white/5 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">Email</h4>
                    <p className="text-white">dev.amin.jafari@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">Phone</h4>
                    <p className="text-white">(+98) 9133265739</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">Location</h4>
                    <p className="text-white">Canada / Remote</p>
                  </div>
                </div>
             </div>

             <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                  <p className="text-white/80 mb-6 text-sm">Get a detailed look at my professional journey, skills, and Flutter expertise.</p>
                  <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                    Download PDF
                  </button>
                </div>
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mb-16"></div>
             </div>
          </div>

          {/* Form */}
          <form className="bg-card border border-white/5 rounded-2xl p-8 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Collaboration / Job Opportunity" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;