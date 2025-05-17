
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import CTA from './components/CTA';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      {/* <CTA /> */}
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;