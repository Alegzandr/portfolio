import { Link } from 'react-router-dom';
import AnimatedA from '../AnimatedA';
import AnimatedButton from '../AnimatedButton';

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
          <AnimatedA href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</AnimatedA>
        </li>
        <li>
          <AnimatedA href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">GitHub</AnimatedA>
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
            <i className="fas fa-chevron-down"></i>
          </AnimatedButton>
        </Link>
      </div>
    </footer>
  );
};

export default Footer
