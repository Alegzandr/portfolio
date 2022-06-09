import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedAProps = {
  href: string,
  target?: string,
  rel?: string,
  download?: string,
  children?: ReactNode
};

const AnimatedA = (props: AnimatedAProps) => {
  return(
    <motion.a
      href={props.href}
      target={props.target}
      rel={props.rel}
      download={props.download}
      whileHover={{ display: 'inline-block', scale: 1.05 }}
      whileTap={{ display: 'inline-block', scale: 0.9 }}
    >
      {props.children}
    </motion.a>
  );
};

export default AnimatedA;
