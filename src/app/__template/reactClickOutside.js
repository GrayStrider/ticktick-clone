import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

const MenuClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  MenuClickOutside.handleClickOutside = () => setIsOpen(false);
  return (
    <button type='button' onClick={toggle}>
      {isOpen ? 'open' : 'closed'}
    </button>
  )
};

const clickOutsideConfig = {
  handleClickOutside: () => MenuClickOutside.handleClickOutside
};

export default onClickOutside(MenuClickOutside, clickOutsideConfig);
