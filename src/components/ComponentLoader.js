import React from 'react'
import { Loader } from './styled-componets/component-loader';
import { PreloaderContainer } from "./styled-componets/component-loader";

const ComponentLoader = () => {
   return (
     <PreloaderContainer>
       <Loader></Loader>
     </PreloaderContainer>
   );
}

export default ComponentLoader
