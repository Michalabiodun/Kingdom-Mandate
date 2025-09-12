import React from 'react';
import Header from './components/Header';
import QuickLinksBar from './components/QuickLinksBar';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <QuickLinksBar />
      <HeroSection />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
