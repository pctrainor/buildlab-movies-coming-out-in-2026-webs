import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-zinc-900 to-slate-800 p-4 border-b border-zinc-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Film className="text-purple-500" size={32} />
          <Link to="/" className="text-2xl font-bold text-white">
            Movies 2026
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-lg text-zinc-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-lg text-zinc-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-lg text-zinc-300 hover:text-white">
            Contact
          </Link>
          <button className="icon-button">
            <Search size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;