import { Fragment } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const allRoutes = routes.map(route => {
    return(
      <Route path={route.path} element={route.element} />
    );
  });

  return(
    <Routes>
      {allRoutes}
    </Routes>
  );
};

function LoadNavLinks() {
  const { t } = useTranslation('home');
  const allNavLinks = routes.map(route => {
    return(
      <li>
        <NavLink to={route.path}>{t(route.name.toLowerCase())}</NavLink>
      </li>
    );
  });

  return(
    <Fragment>
      {allNavLinks}
    </Fragment>
  );
};

export { routes, LoadRoutes, LoadNavLinks };
