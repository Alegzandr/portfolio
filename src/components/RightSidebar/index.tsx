import { AnimatePresence, motion } from 'framer-motion';
import Menu from './Menu';

type RightSidebarProps = {
  menuOpen: boolean,
  open: () => void,
  close: () => void,
  lineInitial: { top: string },
  lineAnimate: { top: string }
};

const RightSidebar = (props: RightSidebarProps) => {
  return(
    <aside className="sidebar-right">
      <motion.button
        className={`btn btn-menu ${props.menuOpen ? 'btn-exit' : ''}`} onClick={props.menuOpen ? props.close : props.open}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className={`fas ${props.menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {props.menuOpen && <Menu menuOpen={props.menuOpen} close={props.close} />}
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
