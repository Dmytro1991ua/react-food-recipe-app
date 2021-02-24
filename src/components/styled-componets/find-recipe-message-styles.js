import styled from "styled-components";
import { colors, fadeInDown } from "./general-styles";

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Message = styled.p`
  font-size: 2rem;
  font-family: "Ranchers", cursive;
  text-align: center;
  animation: ${fadeInDown} 0.4s ease-in-out;
`;
