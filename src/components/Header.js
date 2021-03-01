import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "./BurgerIcon";
import Navigation from "./Navigation";
import { Container } from "./styled-componets/general-styles";
import {
  HeaderSection,
  HeaderBody,
  Logo,
} from "./styled-componets/header-styles";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderBody>
          <Link to="/">
            <Logo
              src={require("../images/logo.png").default}
              alt="recipe app img"
            ></Logo>
          </Link>
          <BurgerIcon />
          <Navigation />
        </HeaderBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
