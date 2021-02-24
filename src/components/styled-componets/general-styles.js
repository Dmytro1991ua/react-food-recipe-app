import styled, { keyframes } from "styled-components";

// Global Styles
export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 117rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (min-width: 90em) {
    max-width: 120rem;
  }
`;

export const colors = {
  black: "#000",
  white: "#fff",
  powderAsh: "#c1c7c5",
  darkBlue: "#090c1b",
  mantis: "#7ac142",
  mantisDarker: " #5a803d",
  lighterBlue: "#153c6b",
  brightGreen: "#60f702 ",
  tomato: "#ff6347",
};

export const fadeInDown = keyframes`
    from {
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
    }
`;

export const flipInX = keyframes`
    from {
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
    }
`;

export const spin = keyframes`
   0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;
