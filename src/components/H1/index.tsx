import { ReactNode } from 'react';

type H1Props = {
  children?: ReactNode
};

const H1 = (props: H1Props) => {
  return(
    <h1
      title={props.children?.toString()}
    >
      {props.children}
    </h1>
  );
};

export default H1;
