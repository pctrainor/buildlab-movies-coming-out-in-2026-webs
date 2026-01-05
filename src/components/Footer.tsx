import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-zinc-900 p-6 border-t border-zinc-700 shadow-md mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/pctrainor" target="_blank" rel="noopener noreferrer" className="icon-button">
            <Github size={24} />
          </a>
          <a href="https://twitter.com/pctrainor" target="_blank" rel="noopener noreferrer" className="icon-button">
            <Twitter size={24} />
          </a>
          <a href="mailto:contact@movies2026.com" className="icon-button">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-zinc-400">
          &copy; {new Date().getFullYear()} Movies Coming Out in 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;