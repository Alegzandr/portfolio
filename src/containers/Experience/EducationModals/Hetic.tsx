import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

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
        <img src="/img/logos/hetic.svg" alt="Hetic" />

        <h2>{t('hetic.title')} - Montreuil</h2>
        <h3>2017 - 2018</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10501.341633667436!2d2.4206932!3d48.8518142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a597564e51389ac!2sHETIC!5e0!3m2!1sfr!2sfr!4v1654466127442!5m2!1sfr!2sfr"
          loading="lazy"
        ></iframe>

        <AnimatedA href="https://www.hetic.net/" target="_blank" rel="noreferrer">
          {t('website')}
        </AnimatedA>
      </AnimatedModal>
    </Fragment>
  );
};

export default Hetic;
