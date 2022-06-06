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

      <article>
        <div className="filters">
          {categories.map((category) => (
            <AnimatedSmallButton onClick={() => handleFilter(category)}>
              {category}
            </AnimatedSmallButton>
          ))}
        </div>

        <p>Current filter : {filter}</p>

        <div>
          {getSkills.map((skill) => skill.name)}
        </div>
      </article>
    </AnimatedDiv>
  );
}

export default Skills;
