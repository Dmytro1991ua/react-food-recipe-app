import styled from "styled-components";
import { colors, spin } from "./general-styles";

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.lighterBlue};
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 1s ease;
`;

export const Loader = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: ${colors.mantisDarker};
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${colors.mantis};
    -webkit-animation: ${spin} 3s linear infinite;
    animation: ${spin} 3s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${colors.brightGreen};
    -webkit-animation: ${spin} 1.5s linear infinite;
    animation: ${spin} 1.5s linear infinite;
  }
`;
