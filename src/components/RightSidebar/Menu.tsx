import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

type MenuProps = {
  close: () => void
};

const Menu = (props: MenuProps) => {
  // Translations
  const { i18n, t } = useTranslation('home');
  const changeLanguage = (lng: string) => { i18n.changeLanguage(lng); };

  i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
  });

  return(
    <motion.nav
      initial={{ y: '-100vh', opacity: 0 }}
      animate={{ y: '0', opacity: 1 }}
      transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
      exit={{ y: '-100vh', opacity: 0 }}
    >
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" onClick={props.close}>
              <img src="/img/logo.png" alt="Alexandre Farrenq" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={props.close}>
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={props.close}>
              {t('experience')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={props.close}>
              {t('skills')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={props.close}>
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
    </motion.nav>
  );
}

export default Menu;
