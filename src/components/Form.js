import React from "react";
import {
  IconBox,
  SearchForm,
  SearchInput,
} from "./styled-componets/form-styles";
import { FaSearch } from "react-icons/fa";

const Form = () => {
  return (
    <SearchForm>
      <label htmlFor="search"></label>
      <SearchInput
        type="text"
        id="search"
        required
        placeholder="Your Recipe..."
      />
      <IconBox>
        <FaSearch color="#fffff" />
      </IconBox>
    </SearchForm>
  );
};

export default Form;
