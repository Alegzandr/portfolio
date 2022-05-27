import './styles/main.scss';
import Router from './components/Router';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import usePageNumber from './hooks/usePageNumber';
import routes from './utilities/routes';
import usePreviousPage from './hooks/usePreviousPage';
import useNextPage from './hooks/useNextPage';
import useMenu from './hooks/useMenu';
import useLineIndicator from './hooks/useLineIndicator';


function App() {
  const { menuOpen, open, close } = useMenu();
  const { lineInitial, lineAnimate } = useLineIndicator('34vh', '42vh', '50vh', '58vh');

  return (
    <div>
      <LeftSidebar
        number={usePageNumber()}
      />

      <main>
        <Router
          routes={routes}
        />
      </main>

      <RightSidebar
        menuOpen={menuOpen}
        open={open}
        close={close}
        lineInitial={lineInitial}
        lineAnimate={lineAnimate}
      />

      <Footer
        previousPage={usePreviousPage()} 
        nextPage={useNextPage()}
        menuOpen={menuOpen}
      />
    </div>
  );
}

export default App;
