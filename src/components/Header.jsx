import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
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
          className="hidden md:flex space-x-8"
        >
          {['Inicio', 'Sobre Mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
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
