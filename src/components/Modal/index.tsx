import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

type ModalProps = {
  closeModal: () => void,
  children?: ReactNode
};

const Modal = (props: ModalProps) => {
  return (
    <Backdrop onClick={props.closeModal}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  
          className="modal"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
          exit={{ y: '100vh', opacity: 0 }}
        >
          <button onClick={props.closeModal}>Close</button>
          {props.children}
        </motion.div>
    </Backdrop>
  );
};

export default Modal;
