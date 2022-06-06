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

      <section>
        <article>
          <h2>
            <i className="fas fa-briefcase"></i>
            {t('work-experience')}
          </h2>
          <ExperienceModals />
        </article>
      </section>

      <section>
        <article>
          <h2>
            <i className="fas fa-book"></i>
            {t('education')}
          </h2>
          <EducationModals />
        </article>
      </section>
    </AnimatedDiv>
  );
}

export default Experience;
