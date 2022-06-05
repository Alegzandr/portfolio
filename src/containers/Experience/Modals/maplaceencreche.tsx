import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const Maplaceencreche = () => {
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

        <h2>Développeur Fullstack JavaScript chez maplaceencrèche</h2>
        <h3>Stage - Juin à Septembre 2016 (4 mois)</h3>

        <ul>
          <li>
            Développement du nouveau frontoffice, de l'optimisation & de la
            mise à jour de toutes les plateformes : blog, recrutement,
            publicité
          </li>
          <li>
            Participation à la migration du backoffice depuis
            Symfony/MySQL vers AngularJS/MongoDB
          </li>
          <li>
          Technologies utilisées : NodeJS, MongoDB, AngularJS, Jekyll, WordPress
          </li>
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default Maplaceencreche;
