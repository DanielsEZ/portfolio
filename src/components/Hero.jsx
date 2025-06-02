import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="inicio" className="section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75"></div>
              <div className="relative p-1 bg-space rounded-full">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-space-light to-space border-2 border-primary/20 overflow-hidden">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Daniel Girón" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/160/1e293b/818cf8?text=DG';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Daniel Girón</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Desarrollador Full Stack apasionado por crear experiencias digitales asombrosas y explorar nuevas tecnologías.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#contacto" 
              className="space-button"
            >
              Contáctame
            </a>
            <a 
              href="#proyectos" 
              className="px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              Ver Proyectos
            </a>
          </motion.div>
          
          <motion.a
            href="#sobre-mi"
            className="mt-16 animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
            aria-label="Desplazarse hacia abajo"
          >
            <FiChevronDown className="w-8 h-8 text-gray-400" />
          </motion.a>
        </div>
      </div>
      
      {/* Efectos de partículas */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
