import { motion } from 'framer-motion';
import { FaCode, FaServer } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaCode className="w-8 h-8" />, description: 'Desarrollo de interfaces de usuario modernas y responsivas con React, Tailwind CSS y más.' },
    { name: 'Backend', icon: <FaServer className="w-8 h-8" />, description: 'Construcción de APIs robustas y escalables con C#, .NET y bases de datos SQL Server.' },
  ];

  return (
    <section id="sobre-mi" className="section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mí</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Apasionado desarrollador full-stack con experiencia en la creación de aplicaciones web modernas y escalables.
            Me encanta aprender nuevas tecnologías y enfrentar desafíos técnicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-space-light/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-space-light/50 to-space/50 p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4">Mi Historia</h3>
          <p className="text-gray-300 mb-4">
            Mi viaje en el desarrollo web comenzó hace varios años cuando descubrí mi pasión por crear cosas en internet. Desde entonces, he trabajado en diversos proyectos que me han permitido crecer como desarrollador y adquirir nuevas habilidades.
          </p>
          <p className="text-gray-300">
            Cuando no estoy programando, me gusta estar al día con las últimas tecnologías, contribuir a proyectos de código abierto y compartir mis conocimientos con la comunidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
