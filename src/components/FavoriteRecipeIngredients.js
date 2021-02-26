import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FavoriteIngredients,
  FavoriteIngredientText,
} from "./styled-componets/favorite-recipe-ingredients";

const FavoriteRecipeIngredients = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <FavoriteIngredients key={uuidv4()}>
        <ul>
          <FavoriteIngredientText>{ingredient.text}</FavoriteIngredientText>
          <>
            Weight - {ingredient.weight.toFixed(2)}
          </>
        </ul>
      </FavoriteIngredients>
    );
  });
};

export default FavoriteRecipeIngredients;
