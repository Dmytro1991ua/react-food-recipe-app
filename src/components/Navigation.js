import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import { List, ListItem, ListLink } from "./styled-componets/header-styles";

const Navigation = () => {
  // desctructure "state" which related to open and close burger menu
  const { burgerMenu } = useContext(RecipesContext);
  const [open, setOpen] = burgerMenu;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List open={open}>
      <ListItem>
        <ListLink to="/" onClick={handleClick}>
          Home
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/recipes" onClick={handleClick}>
          Recipes
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/favorites" onClick={handleClick}>
          Favorites
        </ListLink>
      </ListItem>
    </List>
  );
};

export default Navigation;
