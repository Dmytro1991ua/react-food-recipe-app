import styled from "styled-components";
import { colors } from "./general-styles";
import img from "../../images/bg.jpg";

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
