import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const McDonalds = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="McDonald's"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/mcdonalds.svg" alt="McDonald's" />
        
        <h2>{t('mcDonalds.title')}</h2>
        <h3>{t('mcDonalds.contract')}</h3>

        <div className="white-space">
          {t('mcDonalds.works', { returnObjects: true })}
        </div>
      </AnimatedModal>
    </Fragment>
  );
};

export default McDonalds;
