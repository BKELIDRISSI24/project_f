import React from 'react';
import { Link } from 'react-router-dom';
import vdFile from '../assets/images/vd.mp4'; 
import a1 from '../assets/images/a1.jpg';
import a2 from '../assets/images/a2.jpg';


function Marcup() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden text-center px-6">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={vdFile} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-300 font-medium block mb-3 drop-shadow-md">
            Manifeste & Tourath
          </span>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-6 drop-shadow-lg">
            La Symphonie de la <span className="not-italic font-bold uppercase block text-2xl md:text-3xl text-amber-200 mt-2">Sfifa & de la Nawba</span>
          </h1>
          <div className="w-24 h-[1px] bg-amber-400 mx-auto mb-6 shadow-md"></div>
          <p className="text-gray-100 text-base md:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            "Comme les notes d'une Nawba andalouse qui s'enchaînent avec grâce, chaque tour de Sfifa et chaque fil d'or perpétuent la mélodie éternelle de notre héritage."
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-gray-100">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block mb-3">
          Notre Vision
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-6 italic">
          L'Art de Vivre et de Créer
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
          Bienvenue dans l'univers de <strong className="font-semibold text-emerald-950">Symphonie des Filaments</strong>. Ici, chaque création est pensée comme un sanctuaire où se rejoignent l'amour du détail, la mémoire des palais impériaux et l'exigence d'une haute couture marocaine intemporelle.
        </p>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block">
              L'Art de l'Enchaînement
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
              Quand la Sfifa épouse le rythme de la Nawba
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/40"></div>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Dans la tradition arabo-andalouse, la <strong className="font-semibold text-emerald-950">Nawba</strong> est un voyage initiatique où les mouvements musicaux s'enchaînent avec une fluidité organique — du M'dar apaisé jusqu'au Darj vibrant. 
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Cet enchaînement parfait se retrouve dans le geste de nos maîtresses artisans. Le fil d'or de la <strong className="font-semibold text-emerald-950">Sfifa</strong> serpente le long du velours exactement comme une mélodie d'oud ou de rabab : chaque boucle est une note, chaque raccord est une transition poétique qui donne vie et mouvement au caftan.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl transform rotate-2"></div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl bg-emerald-950/5 border border-emerald-900/10 p-2">
             <img 
                src={a2} 
                alt="Tourath et Sfifa Marocaine" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-emerald-950/10 rounded-3xl transform -rotate-2"></div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl bg-emerald-950/5 border border-emerald-900/10 p-2">
              <img 
                src={a1} 
                alt="Haute Couture et Héritage" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block">
              De Génération en Génération
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
              L'Écho des siècles passés
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/40"></div>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              Aimer le <strong className="font-semibold text-emerald-950">Tourath</strong>, c'est écouter l'écho des veillées andalouses où les familles transmettaient les secrets des points de broderie comme un trésor de famille. 
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              À la maison <strong className="font-semibold text-emerald-950">Symphonie des Filaments</strong>, nous veillons à ce que cet héritage ne soit jamais figé, mais qu'il vibre à chaque instant dans le tombé d'une étoffe et la noblesse d'une parure cousue main.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 text-white py-24 px-6 text-center relative overflow-hidden my-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-4xl text-amber-400 block font-serif">❝</span>
          <p className="text-xl md:text-2xl font-serif italic text-amber-100 leading-relaxed">
            "La Nawba dicte la cadence de l'âme, et la Sfifa habille le corps de cette même grâce andalouse."
          </p>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-300 font-light block pt-4">
            — El Idrissi, Maison de Haute Couture
          </span>
          <div className="pt-6">
            <Link 
              to="/contact" 
              className="inline-block bg-amber-500 text-emerald-950 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:bg-amber-400 transition shadow-lg"
            >
              Écrire votre histoire avec nous
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

Marcup.displayName = 'Marcup';
export default Marcup;