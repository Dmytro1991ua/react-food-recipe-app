import styled from "styled-components";
import { colors } from "./general-styles";

export const MessageError = styled.p`
  position: absolute;
  bottom: -4.3rem;
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${colors.tomato};
  border-radius: 1.2rem;
  min-height: 4.1rem;
  color: ${colors.white};
  text-align: center;
`;
