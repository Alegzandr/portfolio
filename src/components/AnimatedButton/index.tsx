import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedButtonProps = {
  className: string,
  onClick?: () => void,
  children?: ReactNode
};

const AnimatedButton = (props: AnimatedButtonProps) => {
  return(
    <motion.button
      className={props.className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default AnimatedButton;
