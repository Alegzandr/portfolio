import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type BackdropProps = {
  onClick: () => void,
  children?: ReactNode
};

const Backdrop = (props: BackdropProps) => {
  return (
    <motion.div
      onClick={props.onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
