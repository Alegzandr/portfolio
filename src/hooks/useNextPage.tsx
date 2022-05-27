import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../utilities/routes';

const useNextPage = () => {
  const currentPath = useLocation().pathname;
  const [nextPage, setNextPage] = useState('#');

  useEffect(() => {
    if (currentPath !== routes[routes.length - 1].path) {
      setNextPage(routes[routes.findIndex(o => o.path === currentPath) + 1].path);
    } else {
      setNextPage('#');
    }
  }, [currentPath, setNextPage]);

  return nextPage;
}

export default useNextPage;
