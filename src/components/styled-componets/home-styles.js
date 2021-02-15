import styled from "styled-components";
import { colors } from "./general-styles";
import img from "../../images/bg.jpg";
import { Link } from "react-router-dom";

export const HomeSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 38%;
  height: 100vh;

  @media (min-width: 48em) {
    background-position: center;
  }
`;

export const HomeSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${colors.white};
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-family: "Ranchers", cursive;
  text-transform: uppercase;
  letter-spacing: 0.9rem;
  margin-bottom: 1.6rem;

  @media (min-width: 48em) {
    font-size: 5rem;
  }
`;

export const HomeBtn = styled(Link)`
  display: inline-block;
  border: none;
  font-size: 1.7rem;
  padding: 1.2rem 1.8rem;
  background-color: ${colors.mantisDarker};
  border-radius: 1.2rem;
  color: ${colors.white};
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(7px 8px 4px ${colors.darkBlue});
  &:hover {
    background-color: ${colors.mantis};
    transform: translateY(-0.2rem);
  }
  &:active {
    transform: translateY(0rem);
  }
  @media (min-width: 48em) {
    font-size: 2.4rem;
    padding: 1.7rem 2.4rem;
  }
`;
