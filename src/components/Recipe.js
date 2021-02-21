import React, { useState } from "react";
import RecipeIngredients from "./RecipeIngredients";
import { colors } from "./styled-componets/general-styles";
import {
  RecipeCard,
  RecipeCardBtn,
  RecipeImg,
  RecipeTitle,
  RecipeURL,
} from "./styled-componets/recipe-card-styles";

const Recipe = ({ recipe }) => {
  // destructure recieved recipe data and then individual recipe object
  const { recipe: recipeItem } = recipe;
  const { label, image, url, ingredients } = recipeItem;

  //"state" of showing or hiding recipe ingredients on click
  const [recipeDetails, setRecipeDetails] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [btnColor, setBtnColor] = useState(false);

  const handleClick = () => {
    setRecipeDetails(!recipeDetails);
    setBtnText(!btnText);
    setBtnColor(!btnColor);
  };
  return (
    <RecipeCard>
      <RecipeTitle>{label}</RecipeTitle>
      <RecipeImg src={image} alt={label} />
      <RecipeURL href={url} target="_blank" rel="noopener">
        URL
      </RecipeURL>
      <RecipeCardBtn
        style={
          btnColor
            ? { backgroundColor: "#ff6347" }
            : { backgroundColor: "#7ac142" }
        }
        onClick={handleClick}
      >
        {btnText ? "Close Details" : "Ingredients"}
      </RecipeCardBtn>
      {recipeDetails && <RecipeIngredients ingredients={ingredients} />}
    </RecipeCard>
  );
};

export default Recipe;
