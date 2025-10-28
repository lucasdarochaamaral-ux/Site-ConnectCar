import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import AboutTeam from './components/AboutTeam';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <Benefits />
        <HowItWorks />
        <AboutTeam />
        <Pricing />
        <FAQ />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
