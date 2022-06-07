const skills = [
  { name: 'NodeJS', image: 'nodejs.svg', category: 'Back-end' },
  { name: 'MongoDB', image: 'mongodb.svg', category: 'Back-end' },
  { name: 'PHP', image: 'php.svg', category: 'Back-end' },
  { name: 'Symfony', image: 'symfony.svg', category: 'Back-end' },
  { name: 'MySQL', image: 'mysql.svg', category: 'Back-end' },
  { name: 'Gulp', image: 'gulp.svg', category: 'Back-end' },
  { name: 'React', image: 'react.svg', category: 'Front-end' },
  { name: 'jQuery', image: 'jquery.svg', category: 'Front-end' },
  { name: 'SASS', image: 'sass.svg', category: 'Front-end' },
  { name: 'Bootstrap', image: 'bootstrap.png', category: 'Front-end' },
  { name: 'Command Line', image: 'command-line.svg', category: 'Other' },
  { name: 'Git', image: 'git.svg', category: 'Other' },
  { name: 'WordPress', image: 'wordpress.svg', category: 'Other' },
  { name: 'TypeScript', image: 'typescript.svg', category: 'Other' },
  { name: 'Linux', image: 'linux.svg', category: 'Other' },
  { name: 'NGINX', image: 'nginx.svg', category: 'Other' },
  { name: 'Apache', image: 'apache.svg', category: 'Other' },
  { name: 'Photoshop', image: 'photoshop.svg', category: 'Other' },
  { name: 'After Effects', image: 'after-effects.svg', category: 'Other' }
];

const categories: string[] = [];
  
skills.map((skill) => {
  if (categories.indexOf(skill.category) === -1)
    return categories.push(skill.category);
}).sort();

export { skills, categories };
