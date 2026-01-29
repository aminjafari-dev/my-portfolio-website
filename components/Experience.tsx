import React from 'react';
import { EXPERIENCE, EDUCATION, LANGUAGES } from '../constants';
import { Briefcase, GraduationCap, Languages } from 'lucide-react';

/**
 * Experience section: lists work history from constants.
 * Renders a timeline-style list with company, role, period, and bullet points.
 */
const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A decade of programming and 6.5+ years of commercial Flutter delivery across FinTech and product teams.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <article
              key={item.id}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                  </div>
                </div>
                <span className="text-slate-500 text-sm font-medium shrink-0 md:mt-1">{item.period}</span>
              </div>
              <ul className="space-y-2 pl-0 md:pl-14">
                {item.description.map((line, i) => (
                  <li key={i} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <p className="text-white font-medium">{EDUCATION.degree}</p>
              <p className="text-slate-400 text-sm mt-1">{EDUCATION.school}</p>
              <p className="text-slate-500 text-xs mt-1">{EDUCATION.date}</p>
            </div>
            <div className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-secondary/10 rounded-lg text-secondary">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <ul className="space-y-2">
                {LANGUAGES.map((lang) => (
                  <li key={lang.name} className="flex justify-between text-sm">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
