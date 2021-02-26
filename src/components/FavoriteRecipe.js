import React, { useState } from "react";
import {
  FavoriteCard,
  FavoriteCardTitle,
  FavoriteRecipeFeatures,
  FavoriteRecipeImg,
  FavoriteRecipeURL,
  FavoriteIconContainer,
  FavoriteCardBtn,
} from "./styled-componets/favorite-recipe-card-styles";
import { FaTimesCircle } from "react-icons/fa";
import FavoriteRecipeIngredients from "./FavoriteRecipeIngredients";

const FavoriteRecipe = ({ recipe }) => {
  const { recipe: recipeItem } = recipe;
  const { label, image, url, ingredients } = recipeItem;

  //"state" of showing or hiding recipe ingredients on click
  const [recipeDetails, setRecipeDetails] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [btnColor, setBtnColor] = useState(false);
  console.log(recipeItem);

  const handleClick = () => {
    setRecipeDetails(!recipeDetails);
    setBtnColor(!btnColor);
    setBtnText(!btnText);
  };

  return (
     <FavoriteCard>
       <FavoriteCardTitle>{label}</FavoriteCardTitle>
       <FavoriteRecipeImg src={image} alt={label} />
       <FavoriteRecipeFeatures>
         <FavoriteRecipeURL href={url} target="_blank" rel="noopener">
           URL
         </FavoriteRecipeURL>
         <FavoriteIconContainer>
           <FaTimesCircle fontSize="2.3rem" color="#ff6347" />
         </FavoriteIconContainer>
       </FavoriteRecipeFeatures>
       <FavoriteCardBtn
         style={
           btnColor
             ? { backgroundColor: "#ff6347" }
             : { backgroundColor: "#090c1b" }
         }
         onClick={handleClick}
       >
         {btnText ? "Close Details" : "Ingredients"}
       </FavoriteCardBtn>
       {recipeDetails && <FavoriteRecipeIngredients ingredients={ingredients} />}
     </FavoriteCard>
  );
};

export default FavoriteRecipe;
