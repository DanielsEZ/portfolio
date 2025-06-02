import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Sistema Educativo',
    description: 'Un programa de sistema para escuelas donde puedes asignar estudiantes y profesores y realizar operaciones CRUD.',
    technologies: ['C#'],
    github: 'https://github.com/DanielsEZ/EduSistema',
  },

];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl border border-gray-800 bg-space-light/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 p-6"
  >
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="text-xs bg-space/50 text-primary px-3 py-1 rounded-full border border-primary/20"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-400 hover:text-primary transition-colors border border-gray-700 hover:border-primary/30 px-4 py-2 rounded-lg"
        aria-label="Código en GitHub"
      >
        <FaGithub className="mr-2" /> Ver Código
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="proyectos" className="section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Proyectos</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Algunos de mis proyectos más recientes. Cada uno representa un desafío único y una oportunidad para aprender algo nuevo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">¿Interesado en ver más de mi trabajo?</p>
          <a
            href="https://github.com/DanielsEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="space-button inline-flex items-center"
          >
            <FaGithub className="mr-2" /> Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
