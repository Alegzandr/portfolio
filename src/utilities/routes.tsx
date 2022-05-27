import Home from '../containers/Home';
import Experience from '../containers/Experience';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';

const routes = [
  { name: 'Home', path: '/', element: <Home /> },
  { name: 'Experience', path: '/experience', element: <Experience /> },
  { name: 'Skills', path: '/skills', element: <Skills /> },
  { name: 'Contact', path: '/contact', element: <Contact /> }
];

export default routes;
