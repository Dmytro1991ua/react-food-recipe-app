import React, { useState } from "react";
import RecipeIngredients from "./RecipeIngredients";
import {
  RecipeCard,
  RecipeCardBtn,
  RecipeImg,
  RecipeTitle,
  RecipeURL,
} from "./styled-componets/recipe-card";

const Recipe = ({ recipe }) => {
  // destructure recieved recipe data and then individual recipe object
  const { recipe: recipeItem } = recipe;
  const { label, image, url, ingredients } = recipeItem;

  //"state" of showing or hiding recipe ingredients on click
  const [recipeDetails, setRecipeDetails] = useState(false);

  return (
    <RecipeCard>
      <RecipeTitle>{label}</RecipeTitle>
      <RecipeImg src={image} />
      <RecipeURL href={url} target="_blank" rel="noopener">
        URL
      </RecipeURL>
      <RecipeCardBtn onClick={() => setRecipeDetails(!recipeDetails)}>
        Ingredients
      </RecipeCardBtn>
      {recipeDetails && <RecipeIngredients ingredients={ingredients} />}
    </RecipeCard>
  );
};

export default Recipe;
