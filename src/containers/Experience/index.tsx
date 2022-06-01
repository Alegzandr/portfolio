import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';
import AnimatedButton from '../../components/AnimatedButton';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';

const Experience = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <AnimatedDiv className="experience">
      <H1>{t('title')}</H1>

      <div>
        First exp
        <AnimatedButton
          className="btn btn-modal"
          onClick={modalOpen ? closeModal : openModal}
        >
          <i className="fas fa-eye"></i>
        </AnimatedButton>
    </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal closeModal={closeModal} />}
      </AnimatePresence>
    </AnimatedDiv>
  );
}

export default Experience;
