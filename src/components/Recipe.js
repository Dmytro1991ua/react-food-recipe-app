import React from "react";
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
   
  return (
    <RecipeCard>
      <RecipeTitle>{label}</RecipeTitle>
      <RecipeImg src={image} />
      <RecipeURL href={url} target="_blank" rel="noopener">
           URL
      </RecipeURL>
      <RecipeCardBtn>Ingredients</RecipeCardBtn>
    </RecipeCard>
  );
};

export default Recipe;
