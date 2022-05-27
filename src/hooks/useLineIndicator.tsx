import { useEffect } from 'react';
import usePageNumber from './usePageNumber';

const useLineIndicator = (height1: string, height2: string, height3: string, height4: string) => {
  const number = usePageNumber();
  let lineInitial = { top: height1 };
  let lineAnimate = { top: height1 };

  switch(number) {
    case 2:
      lineInitial.top = height2;
      lineAnimate.top = height2;
      break;
    case 3:
      lineInitial.top = height3;
      lineAnimate.top = height3;
      break;
    case 4:
      lineInitial.top = height4;
      lineAnimate.top = height4;
      break;
  };

  useEffect(() => {
    switch(number) {
      case 1:
        if (lineAnimate.top === height2)
          lineInitial.top = height2;

        lineAnimate.top = height1;
        break;
      case 2:
        if (lineAnimate.top === height1)
          lineInitial.top = height1;

        if (lineAnimate.top === height3)
          lineInitial.top = height3;

        lineAnimate.top = height2;
        break;
      case 3:
        if (lineAnimate.top === height2)
          lineInitial.top = height2;

        if (lineAnimate.top === height4)
          lineInitial.top = height4;

        lineAnimate.top = height3;
        break;
      case 4:
        if (lineAnimate.top === height3)
          lineInitial.top = height3

        lineAnimate.top = height4;
        break;
    };
  });

  return { lineInitial, lineAnimate };
}

export default useLineIndicator;
