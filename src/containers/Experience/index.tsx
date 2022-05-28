import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';

const Experience = () => {
  const { t } = useTranslation('experience');

  return(
    <AnimatedDiv className="experience">
      <h1 title={t('title')}>{t('title')}</h1>
    </AnimatedDiv>
  );
}

export default Experience;
