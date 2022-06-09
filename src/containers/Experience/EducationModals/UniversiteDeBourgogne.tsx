import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

const UniversiteDeBourgogne = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();
  const years = '2014 - 2015';

  return(
    <>
      <AnimatedModal
        title="Université de Bourgogne"
        subtitle={years}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/universite-de-bourgogne.svg" alt="Université de Bourgogne" />

        <h2>{t('universiteDeBourgogne.title')} - Dijon</h2>
        <h3>{years}</h3>

        <div className="white-space">
          {t('universiteDeBourgogne.subjects', { returnObjects: true })}
        </div>
        <br />

        <AnimatedA href="https://www.u-bourgogne.fr/" target="_blank" rel="noreferrer">
          <b>{t('website')}</b>
        </AnimatedA>
      </AnimatedModal>
    </>
  );
};

export default UniversiteDeBourgogne;
