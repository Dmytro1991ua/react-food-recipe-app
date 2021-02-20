import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import Form from "./Form";
import Recipe from "./Recipe";
import { Container } from "./styled-componets/general-styles";
import {
  Message,
  RecipeCardBody,
  RecipesSection,
  Spinner,
  Title,
} from "./styled-componets/recipes-styles";
import { v4 as uuidv4 } from "uuid";
import RotateLoader from "react-spinners/RotateLoader";

const Recipes = () => {
  // 'state' of recived recipe data from a server
  const { recipesState } = useContext(RecipesContext);
  const [recipes, setRecipes] = recipesState;

  // desctrucrure "state" of loading data from a server
  const { recipeLoading } = useContext(RecipesContext);
  const [loading, setLoading] = recipeLoading;

   //desctucture "state" which shows or hide error message
  // const { error } = useContext(RecipesContext);
  // const [errorMessage, setErrorMessage] = error;
  
  return (
    <RecipesSection>
      <Container>
        <Title>Search your favorite Recipe</Title>
        <Form />
        {loading ? (
          <Spinner>
            <RotateLoader
              color="green"
              loading={loading}
              size={20}
              margin={4}
            />
          </Spinner>
        ) : (
          <RecipeCardBody>
            {recipes.length > 0 ? (
              recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)
            ) : (
              <Message>Find Your Recipe...</Message>
            )}
          </RecipeCardBody>
        )}
      </Container>
    </RecipesSection>
  );
};

export default Recipes;
