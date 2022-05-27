import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useTranslation('experience');

  return(
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
    >

    </motion.div>
  );
}

export default Experience;
