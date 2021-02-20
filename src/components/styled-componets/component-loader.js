import styled from "styled-components";
import { colors, spin } from "./general-styles";

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.powderAsh};
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
export const Loader = styled.span`
  width: 90px;
  height: 90px;
  border: 10px solid ${colors.lighterBlue};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 50%;
  -webkit-animation: spin 1s linear infinite;
  animation: ${spin} 1s linear infinite;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${colors.lighterBlue};
    margin: -10px 0 0 -10px;
  }
`;
