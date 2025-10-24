import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3eee4] text-zinc-900 selection:bg-amber-200 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
