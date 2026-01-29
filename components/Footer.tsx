import React from 'react';
import { Github, Linkedin, Heart, ExternalLink } from 'lucide-react';

const SOCIAL_LINKS = [
  { href: 'https://github.com/aminjafari-dev', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/aminjafari-dev', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://stackoverflow.com/users/aminjafari-dev', label: 'Stack Overflow', Icon: ExternalLink },
] as const;

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-white">Amin<span className="text-primary">Jafari</span></span>
            <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} Amin Jafari. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-600 text-xs flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> using React, Flutter & AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;