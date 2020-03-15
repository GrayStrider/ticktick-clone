import * as React from 'react'
import  { useState } from "react";

import onClickOutside from "react-onclickoutside";

const MenuClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // @ts-ignore
  MenuClickOutside.handleClickOutside = () => setIsOpen(false);
  return (
    <button type='button' onClick={toggle}>
      {isOpen ? 'open' : 'closed'}
    </button>
  )
};

// @ts-ignore
const clickOutsideConfig = {
  // @ts-ignore
  handleClickOutside: () => MenuClickOutside.handleClickOutside
};

export default onClickOutside(MenuClickOutside, clickOutsideConfig);
