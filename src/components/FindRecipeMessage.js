import React from "react";
import {
  Message,
  MessageBox,
} from "./styled-componets/find-recipe-message-styles";

const FindRecipeMessage = ({title}) => {
  return (
    <MessageBox>
      <Message>{title}</Message>
    </MessageBox>
  );
};

export default FindRecipeMessage;
