import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";

export const RecipesSection = styled.section`
  background-color: ${colors.lighterBlue};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Ranchers", cursive;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  margin-top: 10rem;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeInDown} 0.4s ease-in-out;

  @media (min-width: 48em) {
    font-size: 4rem;
    margin-top: 13rem;
  }

  @media (min-width: 62em) {
    margin-top: 15rem;
  }
`;

export const RecipeCardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: self-start;
`;

export const Message = styled.p`
  font-size: 2rem;
  font-family: "Ranchers", cursive;
  text-align: center;
  animation: ${fadeInDown} 0.4s ease-in-out;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
