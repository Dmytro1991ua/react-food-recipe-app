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
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 30em) {
    flex-direction: row;
  }
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
  position: absolute;
  top: 6rem;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.darkBlue};
  border-right: 5px solid ${colors.mantis};
  padding: 7rem 2rem 2rem 2rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
  transition: all 0.3s ease-in-out;

  @media (min-width: 30em) {
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: transparent;
    border-right: 5px solid transparent;
    padding: 0rem 0rem 0rem 0rem;
    transform: translateX(0);
    transition: none;
  }
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media (min-width: 30em) {
    &:not(:last-child) {
      margin-right: 1rem;
      margin-bottom: 0rem;
    }
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
