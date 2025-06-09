import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './common/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/DanielsEZ',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/daniel-gir%C3%B3n-6a74052ab/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'X (Twitter)',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://x.com/Daniels_EZ',
      color: 'hover:text-blue-300',
    },
  ];

  // Navegación con claves de traducción
  const navItems = [
    { key: 'home', id: 'inicio' },
    { key: 'about', id: 'sobre-mi' },
    { key: 'projects', id: 'proyectos' },
    { key: 'skills', id: 'habilidades' },
    { key: 'contact', id: 'contacto' },
  ];

  return (
    <header className="fixed w-full z-50 bg-space/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Daniel Girón
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.id === 'inicio') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-gray-300 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-sm font-medium"
            >
              {t(`header.${item.key}`)}
            </button>
          ))}
          
          {/* Selector de idioma */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          <div className="md:hidden mr-2">
            <LanguageSwitcher />
          </div>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-colors duration-300`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
