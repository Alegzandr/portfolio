import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Experience() {
  const { t } = useTranslation('experience');

  return(
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: "spring", stiffness: 50 }}
    >

    </motion.div>
  );
}

export default Experience;
