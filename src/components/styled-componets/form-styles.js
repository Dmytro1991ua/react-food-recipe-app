import styled from "styled-components";
import { colors } from "./general-styles";
import { FaSearch } from "react-icons/fa";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  margin: 0 auto 3rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.4rem;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  border: none;
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  &::placeholder {
    color: ${colors.white};
  }
`;

export const SearchLabel = styled.label``;

export const IconBox = styled.button`
  border: none;
  padding: 1.35rem 1.6rem;
  background-color: ${colors.mantis};
  cursor: pointer;
  border-top-right-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
`;

export const SearchIcon = styled(FaSearch)`
  color: red;
  background-color: red;
`;
