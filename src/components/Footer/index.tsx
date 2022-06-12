import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedA from '../AnimatedA';
import AnimatedButton from '../AnimatedButton';

type FooterProps = {
  previousPage: string,
  nextPage: string,
  menuOpen: boolean
};

const Footer = (props: FooterProps) => {
  const { t } = useTranslation('home');

  return(
    <footer>
      <ul className="socials">
        <li>
          <i className="fas fa-user"></i>&nbsp;
          Alexandre Farrenq &nbsp;
          <i className="fas fa-location-dot"></i>&nbsp;
          Paris, France
        </li>
        <li>
          <AnimatedA href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">
            LinkedIn
          </AnimatedA>
        </li>
        <li>
          <AnimatedA href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">
            GitHub
          </AnimatedA>
        </li>
        <li>
          <AnimatedA href="https://github.com/Alegzandr/portfolio" target="_blank" rel="noreferrer">
            {t('made')} <i className="fab fa-react"></i>
          </AnimatedA>
        </li>
      </ul>

      <div className={props.menuOpen ? 'hide' : ''}>
        <Link to={props.previousPage} className={props.previousPage === '#' ? 'hide' : ''}>
          <AnimatedButton className="btn btn-previous">
            <i className="fas fa-chevron-up"></i>
          </AnimatedButton>
        </Link>

        <Link to={props.nextPage} className={props.nextPage === '#' ? 'hide' : ''}>
          <AnimatedButton className="btn btn-next">
            <motion.i
              className="fas fa-chevron-down"
              style={{ display: 'flex' }}
              initial={{ scale: 0, rotate: 0, y: -100 }}
              animate={{ scale: [1, 1.5, 1, 1.5, -1, 1], rotate: [0, 90, -360], y: 0 }}
              transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 1 }}
            ></motion.i>
          </AnimatedButton>
        </Link>
      </div>
    </footer>
  );
};

export default Footer
