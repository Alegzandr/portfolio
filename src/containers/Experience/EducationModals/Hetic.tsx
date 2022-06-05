import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Hetic = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Hetic"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" />

        <h2>{t('hetic.title')} - Montreuil</h2>
        <h3>2017 - 2018</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default Hetic;
