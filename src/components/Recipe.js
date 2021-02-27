import React, { useContext, useState } from "react";
import RecipeIngredients from "./RecipeIngredients";
import {
  IconContainer,
  RecipeCard,
  RecipeCardBtn,
  RecipeFeatures,
  RecipeImg,
  RecipeTitle,
  RecipeURL,
} from "./styled-componets/recipe-card-styles";
import { FaHeart } from "react-icons/fa";
import { RecipesContext } from "../RecipesContext";

const Recipe = ({ recipe }) => {
  // destructure recieved recipe data and then individual recipe object
  const { recipe: recipeItem } = recipe;
  const { label, image, url, ingredients } = recipeItem;

  const { favorites } = useContext(RecipesContext);
  const [favoriteRecipe, setFavoriteRecipe] = favorites;

  //"state" of showing or hiding recipe ingredients on click
  const [recipeDetails, setRecipeDetails] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [btnColor, setBtnColor] = useState(false);

  // handle ingredients emergence, color and text of btn while it's clicking
  const handleClick = () => {
    setRecipeDetails(!recipeDetails);
    setBtnText(!btnText);
    setBtnColor(!btnColor);
  };

  // add favorite food recipe to a favorite component on click to a btn
  const handleAddFavoriteClick = (recipe) => {
    const newFavoriteList = [...favoriteRecipe, recipe];
    setFavoriteRecipe(newFavoriteList);
  };

  return (
    <RecipeCard>
      <RecipeTitle>{label}</RecipeTitle>
      <RecipeImg src={image} alt={label} />
      <RecipeFeatures>
        <RecipeURL href={url} target="_blank" rel="noopener">
          URL
        </RecipeURL>
        <IconContainer>
          <FaHeart
            onClick={() => handleAddFavoriteClick(recipe)}
            color="#ff6347"
            fontSize="2.3rem"
          />
        </IconContainer>
      </RecipeFeatures>
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
