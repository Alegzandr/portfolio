import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const UniversiteDeBourgogne = () => {
  const { t } = useTranslation('experience');
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

        <h2>{t('universiteDeBourgogne.title')} - Dijon</h2>
        <h3>Université de Bourgogne Dijon</h3>
      </AnimatedModal>
    </Fragment>
  );
};

export default UniversiteDeBourgogne;
