import McDonalds from './McDonalds';
import Maplaceencreche from './Maplaceencreche';
import Eclypsia from './Eclypsia';
import Loco from './Loco';

const ExperienceModals = () => {
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

export default ExperienceModals;
