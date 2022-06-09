import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Maplaceencreche = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <>
      <AnimatedModal
        title="maplaceencrèche"
        subtitle={`${(t('maplaceencreche.contract'))} | ${(t('maplaceencreche.date'))}`}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/maplaceencreche.png" alt="maplaceencrèche" className="big" />

        <h2>{t('maplaceencreche.title')}</h2>
        <h3>
          {t('maplaceencreche.contract')} | {t('maplaceencreche.date')} ({t('maplaceencreche.duration')})
        </h3>

        <div className="white-space">
          {t('maplaceencreche.works', { returnObjects: true })}
        </div>
      </AnimatedModal>
    </>
  );
};

export default Maplaceencreche;
