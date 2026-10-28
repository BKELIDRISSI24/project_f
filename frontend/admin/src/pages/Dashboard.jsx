
import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* La barre latérale de l'admin */}
      <Sidebar />
      
      {/* Contenu principal du tableau de bord */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <span className="bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-widest">
            Administration 👑
          </span>
          <h1 className="text-3xl font-serif font-extrabold text-emerald-950 mt-2">
            Tableau de Bord - CaftanAI Store
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Gérez vos caftans, suivez vos statistiques et contrôlez votre boutique marocaine.
          </p>
        </div>

        {/* Section des cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Caftans en stock</h3>
            <p className="text-3xl font-extrabold text-emerald-950 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Commandes IA</h3>
            <p className="text-3xl font-extrabold text-emerald-950 mt-2">4</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Chiffre d'affaires</h3>
            <p className="text-3xl font-extrabold text-emerald-950 mt-2">45,000 MAD</p>
          </div>
        </div>

        {/* Message de confirmation */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-900 text-sm">
          ✨ Votre tableau de bord est de nouveau opérationnel et prêt à être personnalisé !
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
