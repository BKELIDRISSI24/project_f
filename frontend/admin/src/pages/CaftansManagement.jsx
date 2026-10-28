import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function CaftansManagement() {
  // Liste initiale de caftans avec leurs techniques de broderie
  const [caftans, setCaftans] = useState([
    { id: 1, name: 'Caftan Royal Mernissi', type: 'Terz Fassi', price: '12,000 MAD', status: 'Disponible' },
    { id: 2, name: 'Kaftan Zohra El Idrissi', type: 'Terz Rbati', price: '15,500 MAD', status: 'Sur commande' },
    { id: 3, name: 'Djellaba Skali Or', type: 'Broderie Traditionnelle', price: '8,000 MAD', status: 'Disponible' }
  ]);

  const [newCaftan, setNewCaftan] = useState({ name: '', type: 'Terz Rbati', price: '', status: 'Disponible' });

  const handleAddCaftan = (e) => {
    e.preventDefault();
    if (!newCaftan.name || !newCaftan.price) return;
    setCaftans([...caftans, { id: Date.now(), ...newCaftan }]);
    setNewCaftan({ name: '', type: 'Terz Rbati', price: '', status: 'Disponible' });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <span className="bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-widest">
            Atelier & Collections 👑
          </span>
          <h1 className="text-3xl font-serif font-extrabold text-emerald-950 mt-2">
            Gestion des Caftans d'Exception
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Catalogue des pièces uniques brodées (Terz Rbati, Fassi & Skali).
          </p>
        </div>

        {/* Formulaire d'ajout rapide */}
        <form onSubmit={handleAddCaftan} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nom du Caftan</label>
            <input 
              type="text" 
              placeholder="ex: Caftan Sultana" 
              value={newCaftan.name}
              onChange={(e) => setNewCaftan({...newCaftan, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Technique de Broderie</label>
            <select 
              value={newCaftan.type}
              onChange={(e) => setNewCaftan({...newCaftan, type: e.target.value})}
              className="w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 bg-white"
            >
              <option value="Terz Rbati">Terz Rbati</option>
              <option value="Terz Fassi">Terz Fassi</option>
              <option value="Skali & Sfifa">Skali & Sfifa</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Prix (MAD)</label>
            <input 
              type="text" 
              placeholder="ex: 10,000 MAD" 
              value={newCaftan.price}
              onChange={(e) => setNewCaftan({...newCaftan, price: e.target.value})}
              className="w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900"
            />
          </div>
          <button type="submit" className="bg-emerald-950 text-white font-medium py-2 px-4 rounded-xl hover:bg-emerald-900 transition text-sm">
            + Ajouter la pièce
          </button>
        </form>

        {/* Tableau des pièces */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase">
                <th className="p-4">Pièce / Modèle</th>
                <th className="p-4">Art & Broderie</th>
                <th className="p-4">Prix</th>
                <th className="p-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {caftans.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/50">
                  <td className="p-4 font-serif font-bold text-emerald-950">{c.name}</td>
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-lg">
                      {c.type}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-amber-700">{c.price}</td>
                  <td className="p-4 text-gray-600">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default CaftansManagement;