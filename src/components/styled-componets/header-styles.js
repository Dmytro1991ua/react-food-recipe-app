import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";

// Header section
export const HeaderSection = styled.header`
  background-color: ${colors.darkBlue};
  padding: 0.3rem 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  border-bottom: 4px solid ${colors.mantis};
  animation: ${fadeInDown} 0.4s ease-in-out;
`;

export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  @media (min-width: 48em) {
    width: 7rem;
    height: 7rem;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
export const ListLink = styled(Link)`
  font-size: clamp(1.2rem, 1.8rem, 4rem);
  color: ${colors.white};
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  :hover {
    color: ${colors.mantisDarker};
  }
`;
