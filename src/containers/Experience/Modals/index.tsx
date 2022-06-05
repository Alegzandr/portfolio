import { Fragment } from 'react';
import McDonalds from './mcdonalds';
import Maplaceencreche from './maplaceencreche';
import Eclypsia from './eclypsia';
import Loco from './loco';

const Modals = () => {
  const modals = [
    <McDonalds />,
    <Maplaceencreche />,
    <Eclypsia />,
    <Loco />
  ].reverse();

  return(
    <ul className="modals-list">
      {modals}
    </ul>
  );
};

export default Modals;
