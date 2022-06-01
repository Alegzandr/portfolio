import { AnimatePresence, motion } from 'framer-motion';
import AnimatedButton from '../AnimatedButton';
import Menu from './Menu';

type RightSidebarProps = {
  menuOpen: boolean,
  openMenu: () => void,
  closeMenu: () => void,
  lineInitial: { top: string },
  lineAnimate: { top: string }
};

const RightSidebar = (props: RightSidebarProps) => {
  return(
    <aside className="sidebar-right">
      <AnimatedButton
        className={`btn btn-menu ${props.menuOpen ? 'btn-exit' : ''}`}
        onClick={props.menuOpen ? props.closeMenu : props.openMenu}
      >
        <i className={`fas ${props.menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </AnimatedButton>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {props.menuOpen && <Menu close={props.closeMenu} />}
      </AnimatePresence>

      <div className={`shape ${props.menuOpen ? 'hide' : ''}`}>
        <motion.div
          className="line"
          initial={props.lineInitial}
          animate={props.lineAnimate}
          transition= {{ type: 'spring', stiffness: 250, damping: 25, duration: 0.1 }}
        />

        <div className="main-line"></div>
      </div>
    </aside>
  );
};

export default RightSidebar;
