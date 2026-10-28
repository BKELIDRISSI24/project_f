import React from 'react';
import { Link } from 'react-router-dom';
import caftan1 from '../assets/images/caftan1.jpg';
import caftan2 from '../assets/images/caftan2.jpg';
import art1 from '../assets/images/art1.jpg';
import art2 from '../assets/images/art2.jpg';
import art3 from '../assets/images/art3.jpg';
import art4 from '../assets/images/art4.jpg';
import art5 from '../assets/images/art5.jpg';
import art6 from '../assets/images/art6.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      
      <section className="relative h-[85vh] flex items-center justify-center bg-emerald-950 text-white overflow-hidden px-6">
        
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/15 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-amber-400"></span>
            <span className="text-xs uppercase tracking-[0.35em] text-amber-300 font-light">
              Tisser l'amour de notre héritage
            </span>
            <span className="w-12 h-[1px] bg-amber-400"></span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif tracking-wide italic font-normal mb-6">
            SYMPHONIE <span className="not-italic font-bold block uppercase text-2xl md:text-3xl text-amber-100 mt-2">DES FILAMENTS</span>
          </h1>

          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80 mb-8 font-light">
            BY El IDRISSI
          </p>

          <p className="text-lg md:text-xl text-gray-300 font-serif italic max-w-2xl mx-auto mb-10 leading-relaxed">
            "Quand la tradition devient passion, chaque fil raconte l'histoire de notre héritage."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/collections" 
              className="w-full sm:w-auto bg-amber-500 text-emerald-950 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-amber-400 transition"
            >
              Découvrir les Collections
            </Link>
            <Link 
              to="/heritage" 
              className="w-full sm:w-auto border border-amber-400/50 text-amber-200 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-white/10 transition"
            >
              Notre Héritage & Tourath
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium block mb-3">
            Pièces d'Amour.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">
            L'Art du Caftan Royal.
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Brodé avec l'âme, façonné par l'histoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Carte 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-emerald-900/10 group flex flex-col">
            <div className="relative h-[550px] bg-emerald-950/5 flex items-center justify-center overflow-hidden p-4">
              <img 
                src={caftan1} 
                alt="Caftan Symphonie des Filaments" 
                className="w-full h-full object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6 bg-white border-t border-emerald-900/5">
              <span className="text-[10px] text-amber-600 uppercase tracking-widest font-semibold block mb-1">Collection Sur-Mesure</span>
              <h3 className="font-serif text-2xl text-emerald-950">L'Éclat du Velours et de l'Or</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-emerald-900/10 group flex flex-col">
            <div className="relative h-[550px] bg-emerald-950/5 flex items-center justify-center overflow-hidden p-4">
              <img 
                src={caftan2} 
                alt="Caftan Symphonie des Filaments" 
                className="w-full h-full object-contain group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6 bg-white border-t border-emerald-900/5">
              <span className="text-[10px] text-amber-600 uppercase tracking-widest block mb-1">Détails d'Atelier</span>
              <h3 className="font-serif text-2xl text-emerald-950">La Précision du Fil d'Or</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50 rounded-3xl my-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-700 font-medium block mb-3">
            Héritage & Tourath
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6 italic">
            L'Amour de Notre Art
          </h2>
          <div className="w-24 h-[1px] bg-amber-500/40 mx-auto mb-6"></div>
          <p className="text-gray-600 text-base font-light leading-relaxed">
            Un héritage transmis de génération en génération pour sublimer chaque étoffe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art1} alt="Terz Rbati" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                01
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Citadin</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">REBATY</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Motifs floraux et géométriques d'une grande symétrie, brodés au fil d'or (Skali) ou de soie.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art2} alt="Terz Fassi" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                02
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Héritage Fassi</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">LFASSI</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Réalisé sur l'envers du tissu, offrant un ouvrage rigoureusement identique sur les deux faces.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art3} alt="Lghezlafi" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                03
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Finesse</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">LGHEZLAVI</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Un art du détail minutieux qui insuffle relief et délicatesse aux parures royales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art4} alt="Lbera" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                04
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Aiguille</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">LIBERA</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  La maîtrise pure de l'aiguille traditionnelle pour façonner des arabesques d'une rare élégance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art5} alt="Cherquia" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                05
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Éclat Oriental</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">CHERQAOUI</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Des points riches aux influences orientales, apportant une profondeur et un chatoiement uniques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group flex flex-col transition hover:shadow-xl hover:border-amber-200">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img src={art6} alt="Sellan" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 right-4 bg-emerald-950/80 text-amber-300 font-serif text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                06
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">Assemblage</span>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">SELLAN</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  L'art de l'assemblage et du galon cousu main qui structure les pièces avec une perfection absolue.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-normal italic mb-4">
            Commandez votre pièce d'exception
          </h2>
          <p className="text-emerald-200/80 text-sm font-light mb-8 tracking-wide">
            Prenez contact avec Nous pour concevoir le caftan de vos rêves.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-amber-500 text-emerald-950 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-amber-400 transition"
          >
            Nous Contacter
          </Link>
        </div>
      </section>

    </div>
  );
}

Home.displayName = 'Home';
export default Home;