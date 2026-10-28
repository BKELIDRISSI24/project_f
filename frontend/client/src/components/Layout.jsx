
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* C'est cette ligne qui affiche vos pages (Home, Contact, etc.) */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;