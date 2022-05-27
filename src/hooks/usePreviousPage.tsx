import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../utilities/routes';

const usePreviousPage = () => {
  const currentPath = useLocation().pathname;
  const [previousPage, setPreviousPage] = useState('#');

  useEffect(() => {
    if (currentPath !== routes[0].path) {
      setPreviousPage(routes[routes.findIndex(o => o.path === currentPath) - 1].path);
    } else {
      setPreviousPage('#');
    }
  }, [currentPath, setPreviousPage]);

  return previousPage;
}

export default usePreviousPage;
