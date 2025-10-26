import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCodeBranch, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiGit, SiCplusplus, SiCsharp, SiMicrosoftsqlserver, SiMicrosoft } from 'react-icons/si';
import { useTranslation, Trans } from 'react-i18next';

const skills = [
  {
    category: 'Frontend',
    icon: <FaCode className="w-6 h-6" />,
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="w-5 h-5 text-orange-500" />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt className="w-5 h-5 text-blue-500" />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, level: 80 },
      { name: 'React', icon: <SiReact className="w-5 h-5 text-blue-400" />, level: 70 },
      { name: 'Bootstrap', icon: <FaBootstrap className="w-5 h-5 text-purple-600" />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />, level: 60 },
    ],
  },
  {
    category: 'Backend',
    icon: <FaServer className="w-6 h-6" />,
    items: [
      { name: 'C#', icon: <SiCsharp className="w-5 h-5 text-purple-600" />, level: 90 },
      { name: 'C++', icon: <SiCplusplus className="w-5 h-5 text-blue-500" />, level: 60 },
      { name: 'Python', icon: <span className="text-yellow-300">Py</span>, level: 90 },
    ],
  },
  {
    category: 'Bases de Datos',
    icon: <FaDatabase className="w-6 h-6" />,
    items: [
      { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="w-5 h-5 text-red-500" />, level: 90 },
      { name: 'SSMS', icon: <SiMicrosoft className="w-5 h-5 text-blue-500" />, level: 90 },
    ],
  },
  {
    category: 'Control de Versiones',
    icon: <FaCodeBranch className="w-6 h-6" />,
    items: [
      { name: 'Git', icon: <SiGit className="w-5 h-5 text-orange-600" />, level: 85 },
    ],
  },
];

const SkillIcon = ({ name, icon, level }) => (
  <motion.div 
    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl mb-2">
      {icon}
    </div>
    <span className="text-sm font-medium text-center">{name}</span>
  </motion.div>
);

const Skills = () => {
  const { t } = useTranslation();
  
  const skills = [
    {
      category: t('skills.categories.frontend'),
      icon: <FaCode className="w-6 h-6" />,
      items: [
        { name: 'HTML5', icon: <FaHtml5 className="w-5 h-5 text-orange-500" />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="w-5 h-5 text-blue-500" />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, level: 80 },
        { name: 'React', icon: <SiReact className="w-5 h-5 text-blue-400" />, level: 70 },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-5 h-5 text-purple-600" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />, level: 60 },
      ],
    },
    {
      category: t('skills.categories.backend'),
      icon: <FaServer className="w-6 h-6" />,
      items: [
        { name: 'C#', icon: <SiCsharp className="w-5 h-5 text-purple-600" />, level: 90 },
        { name: 'C++', icon: <SiCplusplus className="w-5 h-5 text-blue-500" />, level: 60 },
        { name: 'Python', icon: <span className="text-yellow-300">Py</span>, level: 90 },
      ],
    },
    {
      category: t('skills.categories.database'),
      icon: <FaDatabase className="w-6 h-6" />,
      items: [
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="w-5 h-5 text-red-500" />, level: 90 },
        { name: 'SSMS', icon: <SiMicrosoft className="w-5 h-5 text-blue-500" />, level: 90 },
      ],
    },
    {
      category: t('skills.categories.versionControl'),
      icon: <FaCodeBranch className="w-6 h-6" />,
      items: [
        { name: 'Git', icon: <SiGit className="w-5 h-5 text-orange-600" />, level: 85 },
      ],
    },
  ];
  return (
    <section id="habilidades" className="section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skills.titleText')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t('skills.titleHighlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-space-light/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
              </div>
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillCategory.items.map((item, idx) => (
                    <SkillIcon 
                      key={`${skillCategory.category}-${idx}`}
                      name={item.name}
                      icon={item.icon}
                      level={item.level}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-space-light/50 to-space/50 p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4">{t('skills.approach.title')}</h3>
          <p className="text-gray-300">
            {t('skills.approach.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
