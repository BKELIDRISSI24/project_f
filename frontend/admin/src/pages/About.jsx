import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function AdminAbout() {
  const [title, setTitle] = useState("À propos de Caftan 🇲🇦");
  const [content, setContent] = useState("Né de la passion pour la haute couture marocaine et les technologies de pointe, CaftanAI Store célèbre l'art intemporel du caftan. De Fès à Marrakech, nos inspirations respectent l'excellence du travail artisanal fait main tout en s'ouvrant aux possibilités infinies de l'intelligence artificielle.");
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
              Contenu 
            </span>
            <h1 className="text-2xl font-extrabold text-emerald-950 font-serif mt-2">Gestion de la page À propos</h1>
          </div>
        </div>

        {saved && (
          <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl mb-6 text-sm font-medium border border-emerald-200">
            Modifications enregistrées avec succès !
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">Titre de la page</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">Texte de présentation</label>
              <textarea 
                rows="6" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-emerald-950 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-emerald-900 transition shadow"
            >
              Mettre à jour la page À propos 
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminAbout;