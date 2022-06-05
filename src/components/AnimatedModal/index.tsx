import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../Modal';
import AnimatedButton from '../AnimatedButton';

type AnimatedModalProps = {
  title: string,
  modalOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
  children?: ReactNode
};

const AnimatedModal = (props: AnimatedModalProps) => {
  return(
    <li key={props.title}>
      <AnimatedButton
        className="btn btn-modal"
        onClick={props.modalOpen ? props.closeModal : props.openModal}
        hoverScale={1.05}
        tapScale={0.95}
      >
        {props.title}
      </AnimatedButton>

      <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
      >
        {props.modalOpen && <Modal closeModal={props.closeModal}>
          {props.children}
        </Modal>}
      </AnimatePresence>
    </li>
  );
};

export default AnimatedModal;
