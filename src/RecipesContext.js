import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export const RecipesListProvider = (props) => {
  // recipe related "states"
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState("");
  const [query, setQuery] = useState("");
  //loading "state"
  const [loading, setLoading] = useState(false);
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  //pagination related "states"
  const [currentPage, setCurrentPage] = useState(1); // first page by default
  const [recipeCardsPerPage] = useState(3); // by default 6 recipe cards per page
  const recipeCardsTotalPages = Math.ceil(recipes.length / recipeCardsPerPage);
  // favorite recipe related "state"
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPES_ID}&app_key=${process.env.REACT_APP_RECIPES_KEY}`;
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setRecipes(response.data.hits);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getRecipe();
  }, [query]);

  // preloader
  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  //Get Current Post
  const indexOfLastRecipeCard = currentPage * recipeCardsPerPage; // 1 * 6  = 6
  const indexOfFirstRecipeCard = indexOfLastRecipeCard - recipeCardsPerPage; // 6 - 6 = 0
  const currentRecipeCard = recipes.slice(
    indexOfFirstRecipeCard,
    indexOfLastRecipeCard
  ); // return 6 recipe cards in one page

  const paginate = (pageNumber) => {
    // change a CurrentPage "state" by passing number of a page
    setCurrentPage(pageNumber);
  };

  return (
    <RecipesContext.Provider
      value={{
        recipesState: [currentRecipeCard, setRecipes],
        recipesInput: [recipeInput, setRecipeInput],
        recipeQuery: [query, setQuery],
        preloaderState: [preloader, setPreloader],
        recipeLoading: [loading, setLoading],
        pagination: [paginate],
        pageCurrent: [currentPage, setCurrentPage],
        cardsLength: [recipeCardsTotalPages],
        favorites: [favoriteRecipe, setFavoriteRecipe],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
