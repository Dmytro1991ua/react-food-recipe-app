import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled-componets/general-styles";
import {
  HeaderSection,
  HeaderBody,
  Logo,
  List,
  ListItem,
  ListLink,
} from "./styled-componets/header-styles";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderBody>
          <Link to="/">
            <Logo
              src={require("../images/logo.png").default}
              alt="weather app img"
            ></Logo>
          </Link>
          <List>
            <ListItem>
              <ListLink to="/">Home</ListLink>
            </ListItem>
            <ListItem>
              <ListLink to="/recipes">Recipes</ListLink>
            </ListItem>
          </List>
        </HeaderBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
