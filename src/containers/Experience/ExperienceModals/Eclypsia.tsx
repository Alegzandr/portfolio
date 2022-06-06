import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Eclypsia = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Eclypsia"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" className="big" />

        <h2>{t('eclypsia.title')}</h2>
        <h3>{t('eclypsia.contract')}</h3>

        <div className="white-space">
          {t('eclypsia.works', { returnObjects: true })}
        </div>
      </AnimatedModal>
    </Fragment>
  );
};

export default Eclypsia;
