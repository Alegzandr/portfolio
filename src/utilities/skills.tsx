const skills = [
  { name: 'NodeJS', image: 'nodejs.svg', categories:  [ 'Back-end' ]  },
  { name: 'MongoDB', image: 'mongodb.svg', categories:  [ 'Back-end' ]  },
  { name: 'PHP', image: 'php.svg', categories:  [ 'Back-end' ]  },
  { name: 'Symfony', image: 'symfony.svg', categories:  [ 'Back-end' ]  },
  { name: 'MySQL', image: 'mysql.svg', categories:  [ 'Back-end' ]  },
  { name: 'Gulp', image: 'gulp.svg', categories:  [ 'Tools' ]  },
  { name: 'React', image: 'react.svg', categories:  [ 'Front-end' ]  },
  { name: 'jQuery', image: 'jquery.svg', categories:  [ 'Front-end' ]  },
  { name: 'SASS', image: 'sass.svg', categories:  [ 'Front-end' ]  },
  { name: 'Bootstrap', image: 'bootstrap.png', categories:  [ 'Front-end' ]  },
  { name: 'Command Line', image: 'command-line.svg', categories:  [ 'Tools', 'DevOps' ]  },
  { name: 'Git', image: 'git.svg', categories:  [ 'Tools', 'DevOps' ]  },
  { name: 'WordPress', image: 'wordpress.svg', categories:  [ 'Front-end', 'Back-end' ]  },
  { name: 'TypeScript', image: 'typescript.svg', categories:  [ 'Front-end', 'Back-end' ]  },
  { name: 'Linux', image: 'linux.svg', categories:  [ 'DevOps' ]  },
  { name: 'NGINX', image: 'nginx.svg', categories:  [ 'DevOps' ]  },
  { name: 'Apache', image: 'apache.svg', categories:  [ 'DevOps' ]  },
  { name: 'Photoshop', image: 'photoshop.svg', categories:  [ 'Creativity' ]  },
  { name: 'After Effects', image: 'after-effects.svg', categories:  [ 'Creativity' ] }
].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

const categories: string[] = [];
  
skills.map((skill) => {
  skill.categories.map((category) => {
    if (categories.indexOf(category) === -1)
      return categories.push(category);
  });
});

categories.sort();

export { skills, categories };
