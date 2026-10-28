import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Caftan Sur-Mesure',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-emerald-950 pt-12 pb-24">
      
      {/* Section principale : Salon privé, coordonnées et formulaire direct */}
      <section className="px-6 max-w-6xl mx-auto">
        
        {/* Titre d'introduction épuré */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-700 font-bold block">
            Salon Privé & Commandes
          </span>
          <h1 className="text-4xl md:text-5xl font-serif italic text-emerald-950">
            Écrivons Votre <span className="not-italic font-bold uppercase block text-2xl md:text-3xl text-amber-600 mt-2">Prochaine Symphonie</span>
          </h1>
          <div className="w-24 h-[1px] bg-amber-500/40 mx-auto"></div>
          <p className="text-gray-600 text-base font-light leading-relaxed">
            "Chaque pièce commence par une écoute attentive. Prenez rendez-vous ou confiez-nous vos envies de haute couture marocaine."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-4">
                Venez tisser votre histoire avec nous
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed">
                Que ce soit pour une cérémonie royale, un mariage ou une pièce unique sur-mesure, notre équipe vous accueille pour un accompagnement personnalisé, du choix des étoffes jusqu'aux derniers essayages.
              </p>
            </div>

            <div className="space-y-6 border-t border-b border-gray-100 py-8">
              <div className="flex items-start space-x-4">
                <span className="text-amber-600 font-serif text-xl">✦</span>
                <div>
                  <h3 className="font-serif font-bold text-emerald-950 text-lg">Salon sur Rendez-vous</h3>
                  <p className="text-gray-600 text-sm font-light">Disponibilité exclusive pour un essayage intimiste.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-amber-600 font-serif text-xl">✦</span>
                <div>
                  <h3 className="font-serif font-bold text-emerald-950 text-lg">Contact Direct</h3>
                  <p className="text-gray-600 text-sm font-light">contact@symphoniedesfilaments.ma</p>
                  <p className="text-gray-600 text-sm font-light">+212 6 89 38 84 26</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-amber-600 font-serif text-xl">✦</span>
                <div>
                  <h3 className="font-serif font-bold text-emerald-950 text-lg">Réseaux & Partage</h3>
                  <p className="text-gray-600 text-sm font-light">@symphoniedesfilaments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <span className="text-4xl text-amber-600 block font-serif">✦</span>
                <h3 className="font-serif text-2xl text-emerald-950 font-bold">Votre message a résonné</h3>
                <p className="text-gray-600 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Nous avons bien reçu votre demande. Une conseillère de la maison vous contactera dans les plus brefs délais pour organiser votre échange.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-block bg-emerald-950 text-amber-300 px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-emerald-950/90 transition"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold block mb-2">
                    Formulaire de Réservation
                  </span>
                  <h3 className="font-serif text-2xl text-emerald-950 mb-6">Parlez-nous de vous</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2 font-medium">Nom complet</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom ou titre" 
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-amber-600 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2 font-medium">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com" 
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-amber-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2 font-medium">Téléphone / WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 6..." 
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-amber-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2 font-medium">Vos inspirations</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez vos envies, les couleurs rêvées, la date de votre événement..."
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-emerald-950 focus:outline-none focus:border-amber-600 transition"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-950 text-amber-300 text-center py-4 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:bg-emerald-950/90 transition shadow-md"
                >
                  Transmettre votre message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

Contact.displayName = 'Contact';
export default Contact;