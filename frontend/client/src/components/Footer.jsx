import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-emerald-950 text-gray-300 pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-light">
              Tisser l'amour de notre héritage
            </span>
          </div>
          <h2 className="text-xl font-serif text-white italic font-normal tracking-wide">
            SYMPHONIE <span className="not-italic font-bold uppercase text-sm block text-amber-200 mt-1">DES FILAMENTS</span>
          </h2>
          <p className="text-xs text-amber-300/80 tracking-widest uppercase mt-1 mb-4 font-light">
            by El IDRISSI
          </p>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
           ESPRIT, ART, NOBLESSE
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-6">
            Exploration
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <Link to="/" className="hover:text-amber-300 transition">Accueil de la Maison</Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-amber-300 transition">Collections de Caftans</Link>
            </li>
            <li>
              <Link to="/heritage" className="hover:text-amber-300 transition">Héritage & Tourath </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light">
        <p> SYMPHONIE DES FILAMENTS BY El IDRISSI. </p>
        <p className="mt-2 sm:mt-0 tracking-widest uppercase text-[10px] text-amber-400/60">
          Tisser l'amour de notre héritage
        </p>
      </div>
    </footer>
  );
}

export default Footer;