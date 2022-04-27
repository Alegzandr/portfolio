import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

  i18n.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); })

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">{t('about')}</Link></li>
          <li><Link to="/">{t('skills')}</Link></li>
          <li><Link to="/">{t('contact')}</Link></li>
          <li>
            <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>

        <div className="language">
          <button type="button" onClick={ () => changeLanguage('en') }>
            en
          </button>
          <button type="button" onClick={ () => changeLanguage('fr') }>
            fr
          </button>
        </div>
      </nav>

      <main>
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
