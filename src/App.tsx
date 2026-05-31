import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make Lenis instance globally accessible for scrolling integrations if needed
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Premium Sticky Navigation */}
      <Navbar />
      
      {/* Portfolio Content Sections */}
      <main>
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Skills />
        <CurrentlyBuilding />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
