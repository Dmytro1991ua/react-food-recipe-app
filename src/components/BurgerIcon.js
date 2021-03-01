import React, { useContext, useState } from "react";
import { RecipesContext } from "../RecipesContext";
import { BurgerMenu } from "./styled-componets/burger-menu-styles";

const BurgerIcon = () => {
  // desctructure "state" which related to open and close burger menu
   const { burgerMenu } = useContext(RecipesContext);
   const [open, setOpen] = burgerMenu;
   
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <BurgerMenu open={open} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </BurgerMenu>
  );
};

export default BurgerIcon;
