import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const MauriceGenevoix = () => {
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Lycée Maurice Genevoix"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" />

        <h2>Baccalauréat Scientifique - Decize</h2>
        <h3>2013 - 2014</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default MauriceGenevoix;
