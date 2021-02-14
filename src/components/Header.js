import React from "react";
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
          <Logo
            src={require("../images/logo.png").default}
            alt="weather app img"
          ></Logo>
          <List>
            <ListItem>
              <ListLink href="#">Home</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="#">Recipes</ListLink>
            </ListItem>
          </List>
        </HeaderBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
