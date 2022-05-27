import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation('skills');

  return(
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
    >
      
    </motion.div>
  );
}

export default Skills;
