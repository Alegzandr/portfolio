import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../home/Home';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';

const routes = [
  { name: 'Home', path: '/', element: <Home /> },
  { name: 'Experience', path: '/experience', element: <Experience /> },
  { name: 'Skills', path: '/skills', element: <Skills /> },
  { name: 'Contact', path: '/contact', element: <Contact /> }
];

function LoadRoutes() {
  const location = useLocation();

  const allRoutes = routes.map(route => {
    return(
      <Route path={route.path} element={route.element} />
    );
  });

  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {allRoutes}
      </Routes>
    </AnimatePresence>
  );
};

export { routes, LoadRoutes };
