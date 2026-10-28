import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-emerald-950 text-gray-300 p-6 flex flex-col justify-between min-h-screen">
      <div>
      
        {/* En-tête Artistique Haute Couture */}
<div className="mb-8 border-b border-emerald-900 pb-6">
  {/* Symbole artistique Haute Couture (Aiguille & Fil / Sceau) */}
  <div className="flex items-center gap-2 mb-2">
    <span className="inline-block w-6 h-[2px] bg-amber-400"></span>
    <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-light">
      Haute Couture
    </span>
  </div>
   NOM DE LA MARQUE
  <h2 className="text-xl font-serif tracking-wide text-white italic font-normal">
    SYMPHONIE <span className="not-italic font-bold block text-2xl mt-1 text-amber-100">des FILAMENTS</span>
  </h2>
  
  <p className="text-[11px] tracking-[0.2em] uppercase text-amber-300/70 mt-3 font-light">
    — by El IDRISSI —
  </p>
</div>

        {/* Liens de navigation */}
        <nav className="space-y-2">
          <Link 
            to="/admin" 
            className="block px-4 py-2.5 rounded-xl bg-emerald-900/60 text-white font-medium hover:bg-emerald-900 transition"
          >
            👑 Tableau de bord
          </Link>
          
          <Link 
            to="/admin/caftans" 
            className="block px-4 py-2.5 rounded-xl hover:bg-emerald-900/40 text-gray-300 hover:text-white transition"
          >
            🧵 Gestion des Caftans
          </Link>

          <Link 
            to="/admin/heritage" 
            className="block px-4 py-2.5 rounded-xl hover:bg-emerald-900/40 text-gray-300 hover:text-white transition"
          >
            📜 Tourath & Terz (Rbati / Fassi)
          </Link>
        </nav>
      </div>

      {/* Pied de sidebar */}
      <div className="pt-6 border-t border-emerald-900 text-xs text-gray-400 text-center">
        © 2026 Ben Sghir El Idrissi
      </div>
    </aside>
  );
}

export default Sidebar;