import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

const Hetic = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();
  const years = '2017 - 2018';

  return(
    <>
      <AnimatedModal
        title="Hetic"
        subtitle={years}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/hetic.svg" alt="Hetic" />

        <h2>{t('hetic.title')} - Montreuil</h2>
        <h3>{years}</h3>

        <div className="white-space">
          {t('hetic.subjects', { returnObjects: true })}
        </div>
        <br />

        <AnimatedA href="https://www.hetic.net/" target="_blank" rel="noreferrer">
          <b>{t('website')}</b>
        </AnimatedA>
      </AnimatedModal>
    </>
  );
};

export default Hetic;
