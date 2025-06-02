import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarsBackground from './components/StarsBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  // Efecto para el cursor personalizado
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference hidden md:block';
    cursorDot.className = 'fixed w-2 h-2 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Efecto hover en enlaces y botones
    const handleLinkHover = (e) => {
      cursor.classList.add('scale-150');
      cursorDot.classList.add('scale-150');
    };
    
    const handleLinkLeave = () => {
      cursor.classList.remove('scale-150');
      cursorDot.classList.remove('scale-150');
    };
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Toaster position="top-right" />
      <StarsBackground />
      <Header />
      
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          
          {/* Footer */}
          <footer className="py-8 bg-space-light/50 backdrop-blur-sm border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Daniel Girón. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Hecho con mucho love 
              </p>
            </div>
          </footer>
        </main>
      </AnimatePresence>
      
      {/* Botón de volver arriba */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary/30 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      
      {/* Efecto de partículas flotantes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: Math.random() * 300 + 100 + 'px',
            height: Math.random() * 300 + 100 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            filter: 'blur(40px)',
            zIndex: -1,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default App;
