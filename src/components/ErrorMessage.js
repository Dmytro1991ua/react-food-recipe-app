import React, { useContext } from "react";
import { RecipesContext } from "../RecipesContext";
import { MessageError } from "./styled-componets/error-message-styles";

const ErrorMessage = () => {
  //desctucture "state" which shows or hide error message
  const { error } = useContext(RecipesContext);
  const [errorMessage, setErrorMessage] = error;

  return <MessageError>{errorMessage}</MessageError>;
};

export default ErrorMessage;
