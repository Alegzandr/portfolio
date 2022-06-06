import { useState } from 'react';
import { categories, skills } from '../utilities/skills';

const useFilter = () => {
  const [filter, setFilter] = useState(categories[0]);

  const handleFilter = (category: string) => {
    if (categories.indexOf(category) > -1)
      setFilter(category);
  };

  const getSkills = skills.filter(skill => skill.category.indexOf(filter) > -1);

  return { filter, handleFilter, getSkills };
};

export default useFilter;
