import React from 'react';
import { Link } from 'react-router-dom';
import t1 from '../assets/images/t1.mp4';
import t2 from '../assets/images/t2.jpg';

function About() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
   
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-gray-100">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block mb-3">
          Notre Philosophie
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-6 italic">
          Une Âme dans Chaque Fil
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
          Chez <strong className="font-semibold text-emerald-950">Symphonie des Filaments</strong>, nous refusons l'uniformité. Nous croyons en la force du geste humain, à la noblesse d'un travail de précision qui demande des dizaines — parfois des centaines — d'heures de patience pour donner naissance à des pièces uniques.
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto space-y-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block">
              Savoir-Faire Ancestral
            </span>
            <h2 className="text-3xl font-serif font-bold text-emerald-950">
              Des créations cousues main, de l'esquisse à la parure
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/40"></div>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Le véritable luxe réside dans la main de l'artisan. De la pose minutieuse de la <strong className="font-semibold text-emerald-950">Sfifa</strong> à l'exécution des broderies traditionnelles, chaque point est pensé pour épouser les mouvements du corps avec fluidité et majesté.
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Nos ateliers perpétuent les techniques les plus exigeantes du patrimoine marocain, transformant une simple étoffe en une véritable œuvre d'art vivante et intemporelle.
            </p>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl bg-emerald-950/5 border border-emerald-900/10 p-2">
           <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={t1} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[420px] rounded-3xl overflow-hidden shadow-xl bg-emerald-950/5 border border-emerald-900/10 p-2">
            <img 
                src={t2} alt="Sélection de tissus d'exception" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block">
              Sélection Exquise
            </span>
            <h2 className="text-3xl font-serif font-bold text-emerald-950">
              Des tissus choisis avec amour et exigence
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/40"></div>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Avant de devenir un caftan d'exception, chaque matière première est chinée, touchée et sélectionnée <strong className="font-semibold text-emerald-950">avec amour</strong>. Velours de soie profonds, brocarts chatoyants, satins duchesse et fils d'or pur...
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Nous choisissons nos étoffes comme on choisit des notes de musique : pour leur résonance, leur tombé unique et la douce émotion qu'elles procurent dès qu'on les effleure.
            </p>
          </div>
        </div>

      </section>

      <section className="bg-emerald-900 text-white py-24 px-6 text-center relative overflow-hidden my-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-4xl text-amber-400 block font-serif">❝</span>
          <p className="text-xl md:text-2xl font-serif italic text-amber-100 leading-relaxed">
            "Le véritable artisanat ne se mesure pas au temps qu'il prend, mais à la passion que l'on insuffle dans chaque fibre."
          </p>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-300 font-light block pt-4">
            — Symphonie des Filaments
          </span>
          <div className="pt-6">
            <Link 
              to="/contact" 
              className="inline-block bg-amber-500 text-emerald-950 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:bg-amber-400 transition shadow-lg"
            >
              Donner vie à votre projet sur-mesure
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

About.displayName = 'About';
export default About;