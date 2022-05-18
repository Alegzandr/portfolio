import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useTranslation('home');

  return(
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h1 title={t('title')}>{t('title')}</h1>
      <p>
        {t('about-me')}
      </p>
    </motion.div>
  );
}

export default Home;
