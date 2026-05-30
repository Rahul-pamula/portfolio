import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Premium Sticky Navigation */}
      <Navbar />
      
      {/* Portfolio Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
