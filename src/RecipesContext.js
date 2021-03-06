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
  //"state" to open and close burger menu  in a mobile screens on click
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPES_ID}&app_key=${process.env.REACT_APP_RECIPES_KEY}`;
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setRecipes(response.data.hits);
        setLoading(false);
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

  // set data (objects) from a favoriteRecipe array to a localStorage
  const saveToLocalStorage = (recipeData) => {
    localStorage.setItem("favorite-recipe-data", JSON.stringify(recipeData));
  };

  //get(retrieve) favorite recipe data from a localStorage and render it when a react app is loaded
  useEffect(() => {
    const favoriteRecipeData = JSON.parse(
      localStorage.getItem("favorite-recipe-data")
    );

    if (!favoriteRecipeData) return;

    setFavoriteRecipe(favoriteRecipeData);
  }, []);

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
        localStorage: [saveToLocalStorage],
        burgerMenu: [open, setOpen],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
