import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/AnimatedDiv';
import H1 from '../../components/H1';
import ExperienceModals from './ExperienceModals';
import EducationModals from './EducationModals';

const Experience = () => {
  const { t } = useTranslation('experience');

  return(
    <AnimatedDiv className="experience">
      <H1>{t('title')}</H1>

      <div className="container">
        <section>
          <h2>
            <i className="fas fa-briefcase"></i>
            Work experience
          </h2>
          <ExperienceModals />
        </section>

        <section>
          <h2>
            <i className="fas fa-book"></i>
            Education
          </h2>
          <EducationModals />
        </section>
      </div>
    </AnimatedDiv>
  );
}

export default Experience;
