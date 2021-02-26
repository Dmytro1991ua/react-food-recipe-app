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
import Paginations from "./Pagination";
import FindRecipeMessage from "./FindRecipeMessage";

const Recipes = () => {
  // 'state' of recived recipe data from a server
  const { recipesState } = useContext(RecipesContext);
  const [currentRecipeCard, setRecipes] = recipesState;

  // desctrucrure "state" of loading data from a server
  const { recipeLoading } = useContext(RecipesContext);
  const [loading, setLoading] = recipeLoading;

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
            {currentRecipeCard.length > 0 ? (
              currentRecipeCard.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))
            ) : (
              <FindRecipeMessage title="Find Your Recipe..." />
            )}
          </RecipeCardBody>
        )}
        {!loading && <Paginations />}{" "}
        {/* show Paginations component when a data is loaded and card are rendered*/}
      </Container>
    </RecipesSection>
  );
};

export default Recipes;
