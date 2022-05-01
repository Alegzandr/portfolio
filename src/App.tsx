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

  const [open, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="btn btn-menu" onClick={toggleClass}>
        <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>

      <nav className={open ? 'open' : 'close'}>
        <ul>
          <li>
            <NavLink to="/">
              <img src="/img/logo.jpg" className="desktop-content" alt="Alexandre Farrenq" />
              <img src="/img/logo-mobile.jpg" className="mobile-content" alt="Alexandre Farrenq" />
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
          <li>
            <ul className="socials">
              <li>
                <a href="https://www.NavLinkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="language">
          <button type="button" onClick={() => changeLanguage('en')}>
            en
          </button>
          <button type="button" onClick={() => changeLanguage('fr')}>
            fr
          </button>
        </div>
      </nav>

      <main className={open ? 'hide' : ''}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
