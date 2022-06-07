import { useTranslation } from 'react-i18next';
import { categories } from '../../utilities/skills';
import useFilter from '../../hooks/useFilter';
import H1 from '../../components/H1'
import AnimatedSmallButton from '../../components/AnimatedSmallButton';
import AnimatedDiv from '../../components/AnimatedDiv';;

const Skills = () => {
  const { t } = useTranslation('skills');
  const { filter, handleFilter, getSkills } = useFilter();

  return(
    <AnimatedDiv className="skills">
      <H1>{t('title')}</H1>

      <section>
        <article>
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

          <div className="results">
            {getSkills.map((skill) => (
              <AnimatedDiv className="icon tooltip">
                <span className="tooltip-text">{skill.name}</span>
                <img src={`/img/techs/${skill.image}`} alt={skill.name} />
              </AnimatedDiv>
            ))}
          </div>
        </article>
      </section>

      <section></section>
    </AnimatedDiv>
  );
}

export default Skills;
