import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Experience() {
  const { t } = useTranslation('experience');

  return(
    <motion.div
      className="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    </motion.div>
  );
}

export default Experience;
