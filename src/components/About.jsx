import { motion } from 'framer-motion';
import { FaCode, FaServer } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    { 
      name: t('about.skills.frontend.title'), 
      icon: <FaCode className="w-8 h-8" />, 
      description: t('about.skills.frontend.description') 
    },
    { 
      name: t('about.skills.backend.title'), 
      icon: <FaServer className="w-8 h-8" />, 
      description: t('about.skills.backend.description') 
    },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.titleText')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t('about.titleHighlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
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
          <h3 className="text-2xl font-semibold mb-4">{t('about.story.title')}</h3>
          <p className="text-gray-300 mb-4">
            {t('about.story.p1')}
          </p>
          <p className="text-gray-300">
            {t('about.story.p2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
