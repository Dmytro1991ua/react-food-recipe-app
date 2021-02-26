import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import {
  FavoritesSection,
  FavoriteSectionBody,
  FavoritesSectionTitle,
} from "./styled-componets/favorites-recipe-styles";
import { v4 as uuidv4 } from "uuid";
import FavoriteRecipe from "./FavoriteRecipe";
import { Container } from "./styled-componets/general-styles";
import FindRecipeMessage from "./FindRecipeMessage";

const FavoriteRecipes = () => {
  const { favorites, recipesState } = useContext(RecipesContext);
  const [favoriteRecipe, setFavoriteRecipe] = favorites;

  return (
    <FavoritesSection>
      <Container>
        <FavoritesSectionTitle>Favorite Recipes</FavoritesSectionTitle>
        <FavoriteSectionBody>
          {favoriteRecipe.length > 0 ? (
            favoriteRecipe.map((recipe) => (
              <FavoriteRecipe key={uuidv4()} recipe={recipe} />
            ))
          ) : (
            <FindRecipeMessage title="Add Your Favorite Food Recipe"/>
          )}
        </FavoriteSectionBody>
      </Container>
    </FavoritesSection>
  );
};

export default FavoriteRecipes;
