import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../utilities/routes';

const usePageNumber = () => {
  const currentPath = useLocation().pathname;
  const [number, setNumber] = useState(1);

  useEffect(() => {
    for (let i = 0; i < routes.length; i++)
      if (routes[i].path === currentPath) setNumber(i + 1);
  }, [currentPath]);

  return number;
}

export default usePageNumber;
