import React, { useContext, useState } from "react";
import { RecipesContext } from "../RecipesContext";
import {
  Pagination,
  PaginationBox,
  PaginationBtn,
  PaginationItem,
  PaginationLink,
} from "./styled-componets/pagination-styles";

const Paginations = () => {
  const { pagination, cardsLength, pageCurrent, recipesState } = useContext(
    RecipesContext
  );
  const [paginate] = pagination;
  const [recipeCardsTotalPages] = cardsLength;
  const [current, setCurrentPage] = pageCurrent;
  const [currentRecipeCard, setRecipes] = recipesState;

  // "state" which keeps track on a current pagination btn
  const [currentBtn, setCurentBtn] = useState(1); //first page by default

  let pageNumbers = [];
  for (let i = 1; i <= recipeCardsTotalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <PaginationBox>
      <Pagination>
        {/* Show Prev and Next btns when there is any rendered recipe card */}
        {currentRecipeCard.length > 0 ? (
          <PaginationBtn
            onClick={() => {
              setCurentBtn((prev) => (prev === 1 ? prev : prev - 1));
              setCurrentPage(currentBtn);
            }}
          >
            &lt;
          </PaginationBtn>
        ) : (
          ""
        )}
        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            className={currentBtn === number && "active"}
            onClick={() => {
              paginate(number);
              setCurentBtn(number);
            }}
          >
            <PaginationLink>{number}</PaginationLink>
          </PaginationItem>
        ))}
        {currentRecipeCard.length > 0 ? (
          <PaginationBtn
            onClick={() => {
              setCurentBtn((prev) =>
                prev === pageNumbers.length ? prev : prev + 1
              );
              setCurrentPage(currentBtn);
            }}
          >
            &gt;
          </PaginationBtn>
        ) : (
          ""
        )}
      </Pagination>
    </PaginationBox>
  );
};

export default Paginations;
