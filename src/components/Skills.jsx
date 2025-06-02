import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCodeBranch, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiGit, SiCplusplus, SiCsharp, SiMicrosoftsqlserver, SiMicrosoft } from 'react-icons/si';

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

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center">
        <span className="mr-2">{icon}</span>
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  </div>
);

const Skills = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Habilidades</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo regularmente para crear aplicaciones web modernas y escalables.
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
                {skillCategory.items.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
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
          <h3 className="text-2xl font-semibold mb-4">Mi Enfoque</h3>
          <p className="text-gray-300">
            Me apasiona el desarrollo de software limpio, mantenible y escalable. Siempre estoy buscando aprender nuevas tecnologías
            y mejores prácticas para mejorar mis habilidades. Creo en el código bien documentado, pruebas exhaustivas y una
            colaboración efectiva en equipo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
