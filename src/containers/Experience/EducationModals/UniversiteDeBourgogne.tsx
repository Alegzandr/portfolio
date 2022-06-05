import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const UniversiteDeBourgogne = () => {
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Université de Bourgogne"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" />

        <h2>Licence informatique électronique - Dijon</h2>
        <h3>Université de Bourgogne Dijon</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default UniversiteDeBourgogne;
