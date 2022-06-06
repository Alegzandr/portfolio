const skills = [
  { name: 'NodeJS', image: 'nodejs.svg', category: 'Back-end' },
  { name: 'React', image: 'react.svg', category: 'Front-end' },
  { name: 'MongoDB', image: 'mongodb.svg', category: 'Back-end' }
];

const categories: string[] = [];
  
skills.map((skill) => {
  if (categories.indexOf(skill.category) === -1)
    return categories.push(skill.category);
}).sort();

export { skills, categories };
