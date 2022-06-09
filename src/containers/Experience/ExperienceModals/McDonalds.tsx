import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const McDonalds = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <>
      <AnimatedModal
        title="McDonald's"
        subtitle={`${(t('mcDonalds.contract'))} | ${(t('mcDonalds.date'))}`}
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/mcdonalds.svg" alt="McDonald's" />
        
        <h2>{t('mcDonalds.title')}</h2>
        <h3>
          {t('mcDonalds.contract')} | {t('mcDonalds.date')} ({t('mcDonalds.duration')})
        </h3>

        <div className="white-space">
          {t('mcDonalds.works', { returnObjects: true })}
        </div>
      </AnimatedModal>
    </>
  );
};

export default McDonalds;
