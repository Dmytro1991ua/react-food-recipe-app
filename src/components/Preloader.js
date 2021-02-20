import React from "react";
import {
  Loader,
  PreloaderContainer,
} from "./styled-componets/preloader-styles";

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Loader></Loader>
    </PreloaderContainer>
  );
};

export default Preloader;
