import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Amin Jafari
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {HERO_SUBTITLE}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download CV <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 justify-center md:justify-start text-slate-500">
             <div>
                <span className="block text-2xl font-bold text-white">10+</span>
                <span className="text-sm">Years Exp.</span>
             </div>
             <div className="w-px h-10 bg-slate-800"></div>
             <div>
                <span className="block text-2xl font-bold text-white">7+</span>
                <span className="text-sm">Years Flutter</span>
             </div>
             <div className="w-px h-10 bg-slate-800"></div>
             <div>
                <span className="block text-2xl font-bold text-white">50+</span>
                <span className="text-sm">Apps Launched</span>
             </div>
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl"></div>
             <img 
               src="https://picsum.photos/600/600?grayscale" 
               alt="Amin Jafari" 
               className="relative w-full h-full object-cover rounded-3xl rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl border-2 border-white/10"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;