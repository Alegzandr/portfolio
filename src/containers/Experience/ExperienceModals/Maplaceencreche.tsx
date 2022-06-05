import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Maplaceencreche = () => {
  const { t } = useTranslation('experience');
  const { modalOpen, openModal, closeModal } = useModal();

  return(
    <Fragment>
      <AnimatedModal
        title="maplaceencrèche"
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <img src="/img/logos/maplaceencreche.png" alt="maplaceencrèche" />

        <h2>{t('maplaceencreche.title')}</h2>
        <h3>{t('maplaceencreche.contract')}</h3>

        <ul>
          {t<string, string[]>('maplaceencreche.works', { returnObjects: true }).map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Maplaceencreche;
