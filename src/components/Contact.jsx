import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: t('contact.form.email'),
      value: 'danielgd747@gmail.com',
      link: 'mailto:danielgd747@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: t('contact.form.location'),
      value: 'Ciudad de Guatemala, Guatemala',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/DanielsEZ',
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/daniel-gir%C3%B3n-6a74052ab/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://x.com/Daniels_EZ',
      label: 'Twitter',
      color: 'hover:bg-blue-400'
    }
  ];


  return (
    <section id="contacto" className="section relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.titleText')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('contact.followMe')}</h3>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">{item.title}</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Botones de descarga de CV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CV en Español */}
              <motion.a
                href="https://danielsez.github.io/portfolio/assets/cv-es.pdf"
                download="cv-es.pdf"
                className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <FaFileDownload className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-200">{t('contact.downloadCV')}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{t('contact.spanishPDF')}</p>
                </div>
              </motion.a>

              {/* CV en Inglés */}
              <motion.a
                href="https://danielsez.github.io/portfolio/assets/cv-en.pdf"
                download="cv-en.pdf"
                className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <FaFileDownload className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-200">{t('contact.downloadCV')}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{t('contact.englishPDF')}</p>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <h4 className="text-lg font-medium text-center text-gray-200 mb-6">Sígueme en redes</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
