import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Loco = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Loco"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/loco.svg" alt="Loco" />

        <h2>{t('loco.title')}</h2>
        <h3>{t('loco.contract')}</h3>

        <ul>
          {t<string, string[]>('loco.works', { returnObjects: true }).map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Loco;
