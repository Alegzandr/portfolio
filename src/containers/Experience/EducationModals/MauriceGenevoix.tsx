import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import H1 from '../../../components/H1';
import AnimatedA from '../../../components/AnimatedA';

const MauriceGenevoix = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <>
      <AnimatedModal
        title="Lycée Maurice Genevoix"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <H1>Lycée Maurice Genevoix</H1>

        <h2>{t('mauriceGenevoix.title')} - Decize</h2>
        <h3>2013 - 2014</h3>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10919.014461393956!2d3.4451484!3d46.8288527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb596e0134ada4fa!2sColl%C3%A8ge%20et%20Lyc%C3%A9e%20Maurice%20Genevoix!5e0!3m2!1sfr!2sfr!4v1654466461861!5m2!1sfr!2sfr"
          loading="lazy"
        ></iframe>
        <br />

        <AnimatedA href="http://lyc58-genevoix.ac-dijon.fr/" target="_blank" rel="noreferrer">
          {t('website')}
        </AnimatedA>
      </AnimatedModal>
    </>
  );
};

export default MauriceGenevoix;
