import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';

const Skills = () => {
  const { t } = useTranslation('skills');

  return(
    <AnimatedDiv className="skills">
      <H1>{t('title')}</H1>

      <article></article>
    </AnimatedDiv>
  );
}

export default Skills;
