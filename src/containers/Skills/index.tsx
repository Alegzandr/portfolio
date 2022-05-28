import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';

const Skills = () => {
  const { t } = useTranslation('skills');

  return(
    <AnimatedDiv className="skills">
      <h1 title={t('title')}>{t('title')}</h1>
    </AnimatedDiv>
  );
}

export default Skills;
