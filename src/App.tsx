import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/main.scss';
import Home from './home/Home';
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Contact from './contact/Contact';

function App() {
  // Translations
  const { i18n, t } = useTranslation('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  i18n.on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng);})

  // Menu
  const [open, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!open);
  };

  // Current page number
  const [number, setNumber] = useState(1);
  const currentPath = useLocation().pathname;
  const pages = ['/', '/experience', '/skills', '/contact'];

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i] === currentPath)
        setNumber(i + 1);
    }
  });

  // Go to next page with buttons
  const [previousPage, setPreviousPage] = useState('#');
  const [nextPage, setNextPage] = useState('#');

  useEffect(() => {
    if (currentPath !== pages[0]) {
      setPreviousPage(pages[pages.indexOf(currentPath) - 1]);
    } else {
      setPreviousPage('#');
    }

    if (currentPath !== pages[pages.length - 1]) {
      setNextPage(pages[pages.indexOf(currentPath) + 1]);
    } else {
      setNextPage('#');
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
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<Home />} />
        </Routes>
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
                <NavLink to="/">{t('home')}</NavLink>
              </li>
              <li>
                <NavLink to="/experience">{t('experience')}</NavLink>
              </li>
              <li>
                <NavLink to="/skills">{t('skills')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t('contact')}</NavLink>
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
          <div className={`line line-${number}`}></div>
          <div className="line"></div>
        </div>
      </aside>

      <footer className={open ? 'hide' : ''}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>

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
      </footer>
    </div>
  );
}

export default App;
