import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import Form from "./Form";
import Recipe from "./Recipe";
import { Container } from "./styled-componets/general-styles";
import {
  Message,
  RecipeCardBody,
  RecipesSection,
  Title,
} from "./styled-componets/recipes-styles";
import { v4 as uuidv4 } from "uuid";

const Recipes = () => {
  // 'state' of recived recipe data from a server
  const { recipesState } = useContext(RecipesContext);
  const [recipes, setRecipes] = recipesState;

  return (
    <RecipesSection>
      <Container>
        <Title>Search your favorite Recipe</Title>
        <Form />
        <RecipeCardBody>
          {recipes.length > 0 ? (
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)
          ) : (
            <Message>Find Your Recipe...</Message>
          )}
        </RecipeCardBody>
      </Container>
    </RecipesSection>
  );
};

export default Recipes;
