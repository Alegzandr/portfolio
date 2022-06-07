import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedDivProps = {
  className?: string,
  children?: ReactNode
};

const AnimatedDiv = (props: AnimatedDivProps) => {
  return(
    <motion.div
      className={props.className}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedDiv;
