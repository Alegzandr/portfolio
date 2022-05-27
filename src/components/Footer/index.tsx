import { Link } from 'react-router-dom';

type FooterProps = {
  previousPage: string,
  nextPage: string
};

const Footer = (props: FooterProps) => {
  return(
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/alexandrefarrenq/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/Alegzandr" target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>

      <div>
        <Link to={props.previousPage} className={props.previousPage === '#' ? 'hide' : ''}>
          <button className="btn btn-previous">
            <i className="fas fa-up-long"></i>
          </button>
        </Link>

        <Link to={props.nextPage} className={props.nextPage === '#' ? 'hide' : ''}>
          <button className="btn btn-next">
            <i className="fas fa-down-long"></i>
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer
