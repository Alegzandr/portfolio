import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const MauriceGenevoix = () => {
  const { t } = useTranslation('experience');
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

        <h2>{t('mauriceGenevoix.title')} - Decize</h2>
        <h3>2013 - 2014</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default MauriceGenevoix;
