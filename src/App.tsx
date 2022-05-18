import { useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './styles/main.scss';
import { routes, LoadRoutes } from './common/routes';

function App() {
  // Translations
  const { i18n, t } = useTranslation('home');
  const changeLanguage = (lng: string) => { i18n.changeLanguage(lng); };

  i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
  });

  // Menu
  const [open, setOpen] = useState(false);
  const toggleClass = () => { setOpen(!open); };

  // Current page number
  const [number, setNumber] = useState(1);
  const currentPath = useLocation().pathname;

  useEffect(() => {
    for (let i = 0; i < routes.length; i++)
      if (routes[i].path === currentPath) setNumber(i + 1);
  }, [currentPath]);

  // Go to next page with buttons
  const [previousPage, setPreviousPage] = useState('#');
  const [nextPage, setNextPage] = useState('#');

  useEffect(() => {
    if (currentPath !== routes[0].path) {
      setPreviousPage(routes[routes.findIndex(o => o.path === currentPath) - 1].path);
    } else {
      setPreviousPage('#');
    }

    if (currentPath !== routes[routes.length - 1].path) {
      setNextPage(routes[routes.findIndex(o => o.path === currentPath) + 1].path);
    } else {
      setNextPage('#');
    }
  }, [currentPath, setPreviousPage, setNextPage]);

  // Line indicator animations
  let lineInitial = { top: '34vh' };
  let lineAnimate = { top: '34vh' };

  switch(number) {
    case 2:
      lineInitial.top = '42vh';
      lineAnimate.top = '42vh';
      break;
    case 3:
      lineInitial.top = '50vh';
      lineAnimate.top = '50vh';
      break;
    case 4:
      lineInitial.top = '58vh';
      lineAnimate.top = '58vh';
      break;
  }

  useEffect(() => {
    switch(number) {
      case 1:
        if (lineAnimate.top === '42vh')
          lineInitial.top = '42vh';

        lineAnimate.top = '34vh';
        break;
      case 2:
        if (lineAnimate.top === '34vh')
          lineInitial.top = '34vh';

        if (lineAnimate.top === '50vh')
          lineInitial.top = '50vh';

        lineAnimate.top = '42vh';
        break;
      case 3:
        if (lineAnimate.top === '42vh')
          lineInitial.top = '42vh';

        if (lineAnimate.top === '58vh')
          lineInitial.top = '58vh';

        lineAnimate.top = '50vh';
        break;
      case 4:
        if (lineAnimate.top === '50vh')
          lineInitial.top = '50vh'

        lineAnimate.top = '58vh';
        break;
    }
  });

  return (
    <div>
      <aside className={`sidebar-left ${open ? 'hide' : ''}`}>
        <NavLink to="/">
          <img src="/img/logo.png" alt="Alexandre Farrenq" />
        </NavLink>

        <div className="shape">
          <div className="line"></div>
          <div className="circle">0{number}</div>
          <div className="line"></div>
        </div>
      </aside>

      <main className={open ? 'hide' : ''}>
        <LoadRoutes />
      </main>

      <aside className="sidebar-right">
        <button className={`btn btn-menu ${open ? 'btn-exit' : ''}`} onClick={toggleClass}>
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <nav className={open ? 'open' : ''}>
          <div className="navigation">
            <ul>
              <li>
                <NavLink to="/">
                  <img src="/img/logo.png" alt="Alexandre Farrenq" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => setOpen(false)}>
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" onClick={() => setOpen(false)}>
                  {t('experience')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" onClick={() => setOpen(false)}>
                  {t('skills')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setOpen(false)}>
                  {t('contact')}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="languages bottom">
            <button type="button" onClick={() => changeLanguage('en')}>
              en
            </button>
            <button type="button" onClick={() => changeLanguage('fr')}>
              fr
            </button>
          </div>

          <div className="socials bottom">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={`shape ${open ? 'hide' : ''}`}>
          <motion.div
            className="line"
            initial={lineInitial}
            animate={lineAnimate}
            transition={{ type: "spring", stiffness: 50 }}
          />

          <div className="main-line"></div>
        </div>
      </aside>

      <div>
        <Link to={previousPage} className={previousPage === '#' ? 'hide' : ''}>
          <button className="btn btn-previous">
            <i className="fas fa-up-long"></i>
          </button>
        </Link>

        <Link to={nextPage} className={nextPage === '#' ? 'hide' : ''}>
          <button className="btn btn-next">
            <i className="fas fa-down-long"></i>
          </button>
        </Link>
      </div>

      <footer className={open ? 'hide' : ''}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
