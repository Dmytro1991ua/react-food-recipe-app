import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";

export const Ingredients = styled.div`
  padding: 1.2rem 1.2rem;
  margin: 0 1.2rem 1.2rem;
  border: 3px solid ${colors.mantisDarker};
  border-radius: 1.2rem;
  transition: all 0.3s ease-in-out;
  animation: ${fadeInDown} 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.lighterBlue};
  }
`;

export const Text = styled.li`
  font-size: 1.7rem;
  padding-bottom: 0.9rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${colors.mantisDarker};
`;

export const Weight = styled.li`
  font-size: 1.5rem;
  color: ${colors.mantis};
`;
