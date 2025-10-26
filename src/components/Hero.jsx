import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  // Función para manejar el error de carga de imagen
  const handleImageError = (e) => {
    console.error('Error al cargar la imagen:', e);
    e.target.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'absolute inset-0 bg-gradient-to-br from-space-light to-space flex items-center justify-center text-4xl font-bold text-white';
    fallback.textContent = 'DG';
    e.target.parentNode.appendChild(fallback);
  };

  // Función para desplazamiento suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
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
                  <div className="relative w-full h-full">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Daniel Girón" 
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Título */}
          <div className="text-5xl md:text-7xl font-bold mb-6">
            <motion.h1 
              className="inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('hero.title', {
                name: 'Daniel Girón'
              })}
            </motion.h1>
          </div>
          
          {/* Subtítulo */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* Botones */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection('contacto')}
              className="space-button cursor-pointer"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
            >
              {t('projects.viewProjects')}
            </button>
          </motion.div>
          
          {/* Flecha hacia abajo */}
          <motion.a
            href="#sobre-mi"
            className="mt-16 animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            aria-label="Scroll down"
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
