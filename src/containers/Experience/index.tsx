import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';
import Modals from './Modals';

const Experience = () => {
  const { t } = useTranslation('experience');

  return(
    <AnimatedDiv className="experience">
      <H1>{t('title')}</H1>

      <Modals />
    </AnimatedDiv>
  );
}

export default Experience;
