import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedButtonProps = {
  hoverScale?: number,
  tapScale?: number,
  title?: string,
  className: string,
  onClick?: () => void,
  children?: ReactNode
};

const AnimatedButton = (props: AnimatedButtonProps) => {
  return(
    <motion.button
      className={props.className}
      whileHover={{ scale: props.hoverScale || 1.1 }}
      whileTap={{ scale: props.tapScale || 0.9 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 1 }}
      onClick={props.onClick}
      title={props.title}
    >
      {props.children}
    </motion.button>
  );
};

export default AnimatedButton;
