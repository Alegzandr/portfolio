import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/main.scss';
import Home from './home/Home';
import About from './about/About';
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

  return (
    <div>
      <aside className={`sidebar-left ${open ? 'hide' : ''}`}>
        <NavLink to="/">
          <img src="/img/logo.png" alt="Alexandre Farrenq" />
        </NavLink>
      </aside>

      <main className={open ? 'hide' : ''}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
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
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>{t('about')}</NavLink>
              </li>
              <li>
                <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>{t('skills')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>{t('contact')}</NavLink>
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
      </aside>

      <footer className={open ? 'hide' : ''}>
        <div>
          <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">Github</a>
        </div>

        <div>
          <button className="btn btn-previous">
            <i className="fas fa-up-long"></i>
          </button>

          <button className="btn btn-next">
            <i className="fas fa-down-long"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
