import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";

export const RecipeCard = styled.figure`
  flex: 0 1 100%;
  max-width: 100%;
  background-color: ${colors.darkBlue};
  margin-bottom: 2rem;
  max-width: 30rem;
  color: ${colors.white};
  border: 3px solid ${colors.mantis};
  border-radius: 1.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  animation: ${fadeInDown} 0.4s ease-in-out;
  cursor: pointer;
  filter: drop-shadow(7px 8px 4px ${colors.darkBlue});

  @media (min-width: 39rem) {
    margin-right: 2rem;
  }
`;

export const RecipeTitle = styled.h2`
  position: absolute;
  font-size: 1.8rem;
  padding: 1.5rem 1.5rem 1.5rem 0.8rem;
  background-color: ${colors.mantisDarker};
  opacity: 0.8;
  width: 100%;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: 48em) {
    font-size: 2rem;
  }
`;

export const RecipeImg = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  margin-bottom: 2rem;
`;

export const RecipeURL = styled.a`
  display: inline-block;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${colors.mantisDarker};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.mantis};
  }
`;

export const RecipeCardBtn = styled.a`
  display: inline-block;
  font-size: 1.7rem;
  font-family: "Ranchers", cursive;
  letter-spacing: 0.2rem;
  padding: 1.2rem;
  background-color: ${colors.mantis};
  width: 90%;
  margin: 0 auto 2rem;
  border-radius: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${colors.mantisDarker};
  }
`;
