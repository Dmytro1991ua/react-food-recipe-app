import styled from "styled-components";
import { colors } from "./general-styles";

export const PaginationBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Pagination = styled.ul`
  display: flex;
`;

export const PaginationItem = styled.li`
  padding: 1rem 1.3rem;
  background-color: ${colors.darkBlue};
  border: 2px solid ${colors.mantis};
  margin-right: 1rem;
  border-radius: 0.4rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.active {
    background-color: ${colors.mantisDarker};
  }

  &.disabled {
    opacity: 0.2;
  }

  &:hover:not(.active) {
    background-color: ${colors.lighterBlue};
  }
`;

export const ActivePaginationItem = styled(PaginationItem)`
  background-color: ${colors.mantisDarker};
`;

export const PaginationLink = styled.a`
  display: inline-block;
  color: ${colors.white};
  font-size: 1.7rem;
  transition: all 0.3s ease-in-out;
`;

export const PaginationBtn = styled(PaginationItem)`
  color: ${colors.white};
`;
