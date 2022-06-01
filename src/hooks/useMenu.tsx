import { useState } from 'react';

const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return { menuOpen, closeMenu, openMenu };
};

export default useMenu;
