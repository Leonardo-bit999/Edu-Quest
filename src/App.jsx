import React from 'react';
import './App.css';
import './landing.css';

// Importando todos os componentes Quando clicar no botão aparecer um opção de cadastro uma tela do jogador

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import HowItWorksSection from './components/HowItWorksSection';
import EpicMissionsSection from './components/EpicMissionsSection';
import WhyUniqueSection from './components/WhyUniqueSection';
import HeroesSection from './components/HeroesSection';
import FAQSection from './components/FAQSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <HowItWorksSection />
      <EpicMissionsSection />
      <WhyUniqueSection />
      <HeroesSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
