import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

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
        <img src="/img/logos/universite-de-bourgogne.svg" alt="Université de Bourgogne" />

        <h2>{t('universiteDeBourgogne.title')} - Dijon</h2>
        <h3>2014 - 2015</h3>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10820.486629911038!2d5.0713319!3d47.3119618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7662ef3f13bc90a8!2sUniversit%C3%A9%20de%20Bourgogne!5e0!3m2!1sfr!2sfr!4v1654466429701!5m2!1sfr!2sfr"
          loading="lazy"
        ></iframe>

        <AnimatedA href="https://www.u-bourgogne.fr/" target="_blank" rel="noreferrer">
          {t('website')}
        </AnimatedA>
      </AnimatedModal>
    </Fragment>
  );
};

export default UniversiteDeBourgogne;
