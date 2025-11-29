import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhoCanJoin from './components/WhoCanJoin';
import IncomeSimulator from './components/IncomeSimulator';
import Features from './components/Features';
import Technology from './components/Technology';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <WhoCanJoin />
      <IncomeSimulator />
      <Features />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
