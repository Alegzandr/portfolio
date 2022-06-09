import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedH1Props = {
  children: ReactNode
};

const AnimatedH1 = (props: AnimatedH1Props) => {
  const duration = 0.02;

  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: 0 }
    }
  };
  
  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  return(
    <motion.h1
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {
        props.children
          ?.toString()
          .split('')
          .map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
            >
              {letter === '' ? '\u00A0' : letter}
            </motion.span>
          ))
      }
    </motion.h1>
  );
};

export default AnimatedH1;
