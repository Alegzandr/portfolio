import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Eclypsia = () => {
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

        <h2>Développeur Fullstack JavaScript/PHP chez Eclypsia</h2>
        <h3>Alternance - Octobre 2017 à Janvier 2018 (5 mois)</h3>

        <ul>
          <li>
            Création de scripts pour automatiser des tâches :
            Diffusion en direct, sites secondaires B2B & maintenance du site principal
          </li>
          <li>
            Collaboration directe avec l’administrateur système sur
            le choix & la configuration des serveurs
          </li>
          <li>
            Technologies utilisées : NodeJS, Symfony, MySQL, React
          </li>
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Eclypsia;
