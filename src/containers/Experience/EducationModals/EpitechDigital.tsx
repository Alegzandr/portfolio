import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';
import AnimatedA from '../../../components/AnimatedA';

const EpitechDigital = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();
  const years = '2015 - 2016';

  return(
    <>
      <AnimatedModal
        title="Epitech Digital"
        subtitle={years}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/epitech-digital.svg" alt="Epitech Digital" className="big" />

        <h2>{t('epitechDigital.title')} - Paris</h2>
        <h3>{years}</h3>

        <div className="white-space">
          {t('epitechDigital.subjects', { returnObjects: true })}
        </div>
        <br />

        <AnimatedA href="https://www.epitech.eu/digital/campus/ecole-transformation-digitale-paris/"
          target="_blank"
          rel="noreferrer"
        >
          <b>{t('website')}</b>
        </AnimatedA>
      </AnimatedModal>
    </>
  );
};

export default EpitechDigital;
