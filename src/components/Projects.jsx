import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

// Proyectos movidos dentro del componente para usar las traducciones

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();
  
  // Obtenemos las traducciones usando la clave de traducción del proyecto
  const title = t(`projects.${project.translationKey}.title`);
  const description = t(`projects.${project.translationKey}.description`);
  const viewCode = t('projects.viewCode');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-space-light/50 p-6 hover:border-primary/30 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={`${project.key}-tech-${techIndex}`}
              className="text-xs bg-space/50 text-primary px-3 py-1 rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {project.github && (
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors border border-gray-700 hover:border-primary/30 px-4 py-2 rounded-lg"
            aria-label={`${viewCode} - ${title}`}
          >
            <FaGithub className="mr-2" /> {viewCode}
          </a>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  
  // Definimos solo las claves y datos estáticos aquí
  const projects = [
    {
      key: 'apiFerreteria',
      translationKey: 'apiFerreteria',
      technologies: ['.NET 8', 'Entity Framework', 'SQL Server', 'JWT'],
      github: 'https://github.com/DanielsEZ/FerreteriaAPI',
    },
    {
      key: 'sistemaNominas',
      translationKey: 'sistemaNominas',
      technologies: ['C++', 'Data Structures', 'Text Files', 'Windows API'],
      github: 'https://github.com/DanielsEZ/sistema-nominas',
    },
    {
      key: 'sistemaEducativo',
      translationKey: 'sistemaEducativo',
      technologies: ['C#'],
      github: 'https://github.com/DanielsEZ/EduSistema',
    },
  ];
  
  return (
    <section id="proyectos" className="py-20 relative pt-24" style={{ scrollMarginTop: '100px' }}>
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('projects.titleText')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('projects.titleHighlight')}
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="text-gray-300 max-w-3xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.key}
            project={project}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 mb-6">{t('projects.seeMore')}</p>
        <a
          href="https://github.com/DanielsEZ"
          target="_blank"
          rel="noopener noreferrer"
          className="space-button inline-flex items-center"
        >
          <FaGithub className="mr-2" /> {t('projects.viewOnGitHub')}
        </a>
      </motion.div>
    </div>
    </section>
  );
};

export default Projects;
