import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useTranslation('home');

  return(
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 title={t('title')}>{t('title')}</h1>
      <p>
        {t('about-me')}
      </p>
    </motion.div>
  );
}

export default Home;
