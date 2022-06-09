import { useTranslation } from 'react-i18next';
import { categories } from '../../utilities/skills';
import useFilter from '../../hooks/useFilter';
import AnimatedH1 from '../../components/AnimatedH1'
import AnimatedSmallButton from '../../components/AnimatedSmallButton';
import AnimatedDiv from '../../components/AnimatedDiv';;

const Skills = () => {
  const { t } = useTranslation('skills');
  const { filter, handleFilter, getSkills } = useFilter();

  return(
    <AnimatedDiv className="skills">
      <section>
        <article>
          <AnimatedH1>{t('title')}</AnimatedH1>

          <div className="filters">
            {categories.map((category) => (
              <AnimatedSmallButton
                className={`btn btn-small ${filter === category ? 'active' : ''}`}
                onClick={() => handleFilter(category)}
              >
                {t(`categories.${category.toLowerCase()}`)}
              </AnimatedSmallButton>
            ))}
          </div>
          <br />

          <div className="results">
            {getSkills.map((skill) => (
              <AnimatedDiv className="icon tooltip">
                <span className="tooltip-text">{skill.name}</span>
                <img src={`/img/techs/${skill.image}`} alt={skill.name} />
              </AnimatedDiv>
            ))}
          </div>

          <div className="soft-skills">
            <br />
            {t('softSkills')}
          </div>
        </article>
      </section>
    </AnimatedDiv>
  );
}

export default Skills;
