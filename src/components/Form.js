import React, { useContext } from "react";
import {
  IconBox,
  SearchForm,
  SearchInput,
} from "./styled-componets/form-styles";
import { FaSearch } from "react-icons/fa";
import { RecipesContext } from "../RecipesContext";

const Form = () => {
  // "state" of user's recipe input
  const { recipesInput, recipeQuery } = useContext(RecipesContext);
  const [recipeInput, setRecipeInput] = recipesInput;

  const [query, setQuery] = recipeQuery; // recipe API query 'state'

  const handleOnChange = (event) => {
    setRecipeInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(recipeInput);
    setRecipeInput("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <SearchInput
        type="text"
        id="search"
        value={recipeInput}
        onChange={handleOnChange}
        required
        placeholder="Your Recipe..."
      />
      <IconBox>
        <FaSearch />
      </IconBox>
    </SearchForm>
  );
};

export default Form;
