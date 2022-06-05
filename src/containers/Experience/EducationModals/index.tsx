import MauriceGenevoix from './MauriceGenevoix';
import UnivesiteDeBourgogne from './UniversiteDeBourgogne';
import EpitechDigital from './EpitechDigital';
import Hetic from './Hetic';

const ExperienceModals = () => {
  const modals = [
    <MauriceGenevoix />,
    <UnivesiteDeBourgogne />,
    <EpitechDigital />,
    <Hetic />
  ].reverse();

  return(
    <ul className="modals-list">
      {modals}
    </ul>
  );
};

export default ExperienceModals;
