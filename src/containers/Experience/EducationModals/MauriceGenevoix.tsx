import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

const MauriceGenevoix = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();
  const years = '2013 - 2014';

  return(
    <>
      <AnimatedModal
        title="Lycée Maurice Genevoix"
        subtitle={years}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <h1>Lycée Maurice Genevoix</h1>

        <h2>{t('mauriceGenevoix.title')} - Decize (58)</h2>
        <h3>{years}</h3>

        <br />

        <AnimatedA href="http://lyc58-genevoix.ac-dijon.fr/" target="_blank" rel="noreferrer">
          <b>{t('website')}</b>
        </AnimatedA>
      </AnimatedModal>
    </>
  );
};

export default MauriceGenevoix;
