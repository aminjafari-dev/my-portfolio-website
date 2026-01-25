import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-card/50 border border-white/5 rounded-xl p-6 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{skill.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000 ease-out group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;