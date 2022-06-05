import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Eclypsia = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="Eclypsia"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/eclypsia.png" alt="Eclypsia" />

        <h2>{t('eclypsia.title')}</h2>
        <h3>{t('eclypsia.contract')}</h3>

        <ul>
          {t<string, string[]>('eclypsia.works', { returnObjects: true }).map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Eclypsia;
