import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const EpitechDigital = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Epitech Digital"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" />

        <h2>{t('epitechDigital.title')} - Paris</h2>
        <h3>2015 - 2016</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default EpitechDigital;
