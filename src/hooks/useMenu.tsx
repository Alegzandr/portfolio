import { useState } from 'react';

const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);
  const open = () => setMenuOpen(true);

  return { menuOpen, close, open };
};

export default useMenu;
