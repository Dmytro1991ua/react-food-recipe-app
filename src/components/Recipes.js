import React from "react";
import Form from "./Form";
import { Container } from "./styled-componets/general-styles";
import { RecipesSection, Title } from "./styled-componets/recipes-styles";

const Recipes = () => {
  return (
    <RecipesSection>
      <Container>
        <Title>Search your favorite Recipe</Title>
        <Form />
      </Container>
    </RecipesSection>
  );
};

export default Recipes;
