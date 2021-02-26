import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";
import { Ingredients, Text, Weight } from "./recipeIngredients-styles";

export const FavoriteIngredients = styled(Ingredients)`
  background-color: ${colors.mantis};
  border: 3px solid ${colors.darkBlue};
  color: ${colors.darkBlue};

  &:hover {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border: 3px solid ${colors.white};
  }
`;

export const FavoriteIngredientText = styled(Text)`
  border-bottom: 1px solid ${colors.white};
`;

