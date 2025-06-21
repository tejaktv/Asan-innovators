import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BrochurePopup from './components/BrochurePopup';
import FloatingBrochureButton from './components/FloatingBrochureButton';
import FloatingWhatsAppButton2 from './components/FloatingWhatsAppButton2';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <BrochurePopup />
      <FloatingBrochureButton />
      <FloatingWhatsAppButton2 />
      <ScrollToTopButton />
    </div>
  );
}

export default App;