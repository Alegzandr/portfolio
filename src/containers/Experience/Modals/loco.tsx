import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Loco = () => {
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

        <h2>
          Création & développement d'un jeu de cartes en ligne : Loco
        </h2>
        <h3>Projet personnel - Août 2021 à Aujourd'hui</h3>

        <ul>
          <li>Collaboration avec un web designer</li>
          <li>Développement de l'entièreté du jeu</li>
          <li>Technologies utilisées : TypeScript, SASS, ExpressJS, React, SocketIO</li>
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Loco;
