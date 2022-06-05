import { Fragment } from 'react';
import useModal from '../../../hooks/useModal';
import AnimatedModal from '../../../components/AnimatedModal';

const McDonalds = () => {
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
        
        <h2>Equipier polyvalent chez McDonald's Dijon</h2>
        <h3>CDI - Mars à Août 2015 (6 mois)</h3>

        <ul>
          <li>Travail en équipe & formation des nouveaux arrivants</li>
          <li>Livraisons, lobby, plonge, service</li>
        </ul>
      </AnimatedModal>
    </Fragment>
  );
};

export default McDonalds;
