import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, Text3D, Center, useMatcapTexture } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial 
          color="#0066ff" 
          attach="material" 
          distort={0.5} 
          speed={2} 
          roughness={0.2} 
          metalness={0.8}
          transparent={true}
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTechShapes() {
  return (
    <>
      <Float speed={3} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#00ffff" wireframe />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[4, -2, -1]}>
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#4f46e5" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -offset, duration: 1.2 });
      } else {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00c6ff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#0072ff" />
          <Suspense fallback={null}>
            <AbstractShape />
            <FloatingTechShapes />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <motion.div 
        className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center pointer-events-none"
      >
        {/* Soft Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold mb-8 shadow-sm pointer-events-auto backdrop-blur-md"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>Scale · AI · Backend Systems</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 pointer-events-auto drop-shadow-2xl"
        >
          Rahul Pamula
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            AI & Backend Engineer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 pointer-events-auto"
        >
          Architecting intelligent systems and high-performance backends that deliver measurable, real-world impact.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto pointer-events-auto"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(79,140,255,0.4)] hover:shadow-[0_0_30px_rgba(79,140,255,0.6)] active:scale-[0.97] hover:scale-[1.02] transition-all duration-300 border border-blue-500/50"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <a
            href="/RAHUL_RESUME.pdf"
            download="RAHUL_RESUME.pdf"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          <a
            href="mailto:pamularahul123@gmail.com?subject=Let's%20Work%20Together"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-slate-400 font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}

