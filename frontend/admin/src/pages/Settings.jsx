import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function AdminSettings() {
  const [storeName, setStoreName] = useState("CaftanAI Store");
  const [currency, setCurrency] = useState("MAD");
  const [notification, setNotification] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <span className="bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-widest">
              Paramètres ⚙️
            </span>
            <h1 className="text-2xl font-extrabold text-emerald-950 font-serif mt-2">Configuration de la Boutique</h1>
          </div>
        </div>

        {saved && (
          <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl mb-6 text-sm font-medium border border-emerald-200">
            ✨ Paramètres mis à jour avec succès !
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">Nom de la boutique</label>
              <input 
                type="text" 
                value={storeName} 
                onChange={(e) => setStoreName(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">Devise principale</label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="MAD">MAD (Dirham Marocain)</option>
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="notif" 
                checked={notification} 
                onChange={(e) => setNotification(e.target.checked)} 
                className="w-5 h-5 text-emerald-950 rounded focus:ring-amber-500"
              />
              <label htmlFor="notif" className="text-gray-700 font-medium text-sm">Activer les notifications par email pour les nouvelles commandes IA</label>
            </div>

            <button 
              type="submit" 
              className="bg-emerald-950 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-emerald-900 transition shadow"
            >
              Enregistrer les modifications 💾
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminSettings;