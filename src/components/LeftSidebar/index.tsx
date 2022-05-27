import { NavLink } from 'react-router-dom';

type LeftSidebarProps = {
  number: number,
};

const LeftSidebar = (props: LeftSidebarProps) => {
  return(
    <aside className="sidebar-left">
      <NavLink to="/">
        <img src="/img/logo.png" alt="Alexandre Farrenq" />
      </NavLink>

      <div className="shape">
        <div className="line"></div>
        <div className="circle">0{props.number}</div>
        <div className="line"></div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
