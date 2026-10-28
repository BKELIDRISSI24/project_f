import React from 'react';
import Sidebar from '../components/Sidebar';

function Heritage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-6">
          <span className="bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-widest">
            Tourath & Haute Couture 👑
          </span>
          
          <h1 className="text-4xl font-serif font-extrabold text-emerald-950 mt-4 mb-2">
            Symphonie des Filaments <span className="text-amber-700 font-normal text-2xl">by El Idrissi</span>
          </h1>
          <p className="text-gray-600 text-base mb-8">
            L'art ancestral de la broderie marocaine, entre tradition palatine et excellence contemporaine.
          </p>

          {/* Section Terz Rbati */}
          <div className="mb-8 border-l-4 border-emerald-900 pl-6 py-2">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-3">L'Excellence du Terz Rbati</h2>
            <p className="text-gray-700 leading-relaxed">
              Né dans la capitale administrative et historique, le <strong>Terz Rbati</strong> se distingue par ses motifs floraux et géométriques d'une grande symétrie, brodés au fil d'or (Skali) ou de soie sur des fonds de velours ou de brocart. C'est l'expression même de la noblesse citadine.
            </p>
          </div>

          {/* Section Terz Fassi */}
          <div className="mb-8 border-l-4 border-amber-600 pl-6 py-2">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-3">La Noblesse du Terz Fassi</h2>
            <p className="text-gray-700 leading-relaxed">
              Le <strong>Terz Fassi</strong> (broderie de Fès) est l'un des trésors les plus raffinés du patrimoine marocain. Réalisé traditionnellement à la main sur l'envers du tissu (Al-Gherza), il offre la particularité d'être rigoureusement identique sur les deux faces, témoignant de la virtuosité des artisanes de Fès.
            </p>
          </div>

          {/* Note de bas de page de la marque */}
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-sm mt-6 text-center italic">
            "Chaque caftan cousu sous la griffe El Idrissi est un fragment de notre histoire, tissé avec passion et respect des traditions ancestrales."
          </div>
        </div>
      </main>
    </div>
  );
}

export default Heritage;