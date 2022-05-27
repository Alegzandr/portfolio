import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type FooterProps = {
  previousPage: string,
  nextPage: string,
  menuOpen: boolean
};

const Footer = (props: FooterProps) => {
  return(
    <footer>
      <ul className="socials">
        <li>
          <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>

      <div className={props.menuOpen ? 'hide' : ''}>
        <Link to={props.previousPage} className={props.previousPage === '#' ? 'hide' : ''}>
          <motion.button
            className="btn btn-previous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-up-long"></i>
          </motion.button>
        </Link>

        <Link to={props.nextPage} className={props.nextPage === '#' ? 'hide' : ''}>
          <motion.button
            className="btn btn-next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-down-long"></i>
          </motion.button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer
