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

const App = () => {
  const { menuOpen, openMenu, closeMenu } = useMenu();
  const { lineInitial, lineAnimate } = useLineIndicator('34vh', '42vh', '50vh', '58vh');

  return (
    <>
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
        openMenu={openMenu}
        closeMenu={closeMenu}
        lineInitial={lineInitial}
        lineAnimate={lineAnimate}
        routes={routes}
      />

      <Footer
        previousPage={usePreviousPage()} 
        nextPage={useNextPage()}
        menuOpen={menuOpen}
      />
    </>
  );
}

export default App;
