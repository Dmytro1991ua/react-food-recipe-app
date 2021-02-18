import React from "react";
import { Container} from "./styled-componets/general-styles";
import {
  HomeBtn,
  HomeSection,
  HomeSectionBody,
  Title,
} from "./styled-componets/home-styles";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <HomeSectionBody>
          <Title>Find Your Recipes</Title>
          <HomeBtn to="/recipes">Search Recipes</HomeBtn>
        </HomeSectionBody>
      </Container>
    </HomeSection>
  );
};

export default Home;
