import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedSmallButtonProps = {
  onClick?: () => void,
  children?: ReactNode
};

const AnimatedSmallButton = (props: AnimatedSmallButtonProps) => {
  return(
    <motion.button
      className="btn btn-small"
      whileHover={{ backgroundColor: '#fff', color: '#000' }}
      whileTap={{ scale: 0.95 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default AnimatedSmallButton;
