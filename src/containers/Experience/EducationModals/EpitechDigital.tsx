import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

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
        <img src="/img/logos/epitech-digital.svg" alt="Epitech Digital" className="big" />

        <h2>{t('epitechDigital.title')} - Paris</h2>
        <h3>2015 - 2016</h3>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.575612357758!2d2.371361315840777!3d48.86630250810343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66de4a869ffe7%3A0x853396d4b17732a!2s95%20Ave%20Parmentier%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1654466379496!5m2!1sfr!2sfr"
          loading="lazy"
        ></iframe>
        <br />

        <AnimatedA href="https://www.epitech.eu/digital/campus/ecole-transformation-digitale-paris/"
          target="_blank"
          rel="noreferrer"
        >
          {t('website')}
        </AnimatedA>
      </AnimatedModal>
    </Fragment>
  );
};

export default EpitechDigital;
