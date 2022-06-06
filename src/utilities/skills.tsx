const skills = [
  { name: 'NodeJS', img: '', category: 'Back-end' },
  { name: 'React', img: '', category: 'Front-end' },
  { name: 'Symfony', img: '', category: 'Back-end' }
];

const categories: string[] = [];
  
skills.map((skill) => {
  if (categories.indexOf(skill.category) === -1)
    return categories.push(skill.category);
}).sort();

export { skills, categories };
