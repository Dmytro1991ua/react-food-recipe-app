import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import Form from "./Form";
import Recipe from "./Recipe";
import { Container } from "./styled-componets/general-styles";
import { RecipesSection, Title } from "./styled-componets/recipes-styles";
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
        {recipes.length > 0 ? (
          recipes.map((recipe) => <Recipe key={uuidv4()}  recipe={recipe} />)
        ) : (
          <h2>Find Your Recipe</h2>
        )}
      </Container>
    </RecipesSection>
  );
};

export default Recipes;
