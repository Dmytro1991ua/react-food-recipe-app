import styled from "styled-components";
import { colors} from "./general-styles";
import { RecipeCardBody, RecipesSection, Title } from "./recipes-styles";

export const FavoritesSection = styled(RecipesSection)`
  background-color: ${colors.mantisDarker};
`;

export const FavoritesSectionTitle = styled(Title)``;

export const FavoriteSectionBody = styled(RecipeCardBody)`
   @media (min-width: 62em) {
      justify-content: flex-start;
   }
`;

