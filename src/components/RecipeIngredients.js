import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Ingredients,
  Text,
  Weight,
} from "./styled-componets/recipeIngredients-styles";

const RecipeIngredients = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <Ingredients key={uuidv4()}>
        <ul>
          <Text>{ingredient.text}</Text>
          <Weight>Weight - {ingredient.weight.toFixed(2)}</Weight>
        </ul>
      </Ingredients>
    );
  });
};

export default RecipeIngredients;
