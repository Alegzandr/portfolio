import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Skills() {
  const { t } = useTranslation('skills');

  return(
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      
    </motion.div>
  );
}

export default Skills;
