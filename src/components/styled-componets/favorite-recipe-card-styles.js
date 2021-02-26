import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";
import {
  IconContainer,
  RecipeCard,
  RecipeCardBtn,
  RecipeFeatures,
  RecipeImg,
  RecipeTitle,
  RecipeURL,
} from "./recipe-card-styles";

export const FavoriteCard = styled(RecipeCard)`
  background-color: ${colors.lighterBlue};
  border: 3px solid ${colors.white};
`;

export const FavoriteCardTitle = styled(RecipeTitle)`
  background-color: ${colors.darkBlue};
`;

export const FavoriteRecipeImg = styled(RecipeImg)``;

export const FavoriteRecipeFeatures = styled(RecipeFeatures)``;
export const FavoriteRecipeURL = styled(RecipeURL)`
  color: ${colors.white};
`;

export const FavoriteIconContainer = styled(IconContainer)`
  background-color: ${colors.darkBlue};
`;

export const FavoriteCardBtn = styled(RecipeCardBtn)``;

