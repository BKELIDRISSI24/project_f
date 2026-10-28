import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-emerald-950 flex items-center gap-2">
          <span className="text-amber-500">👑</span> SYMPHONIE DES FILAMENTS <span className="text-xs tracking-widest uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-sans"></span>
        </Link>
        <nav className="space-x-8">
          <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium transition">Accueil</Link>
          <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium transition">À propos</Link>
          <Link to="/marcup" className="text-gray-700 hover:text-amber-600 font-medium transition">Héritage & Tourath</Link>
          <Link to="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;