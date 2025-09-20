
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Stance from './components/Stance';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stance />
      <Footer />
    </div>;
}