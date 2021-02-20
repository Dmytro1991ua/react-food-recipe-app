import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export const RecipesListProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [preloader, setPreloader] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPES_ID}&app_key=${process.env.REACT_APP_RECIPES_KEY}`;
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setRecipes(response.data.hits);
        setLoading(false);
        setErrorMessage(null);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
        setErrorMessage("No food with such name")
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

  return (
    <RecipesContext.Provider
      value={{
        recipesState: [recipes, setRecipes],
        recipesInput: [recipeInput, setRecipeInput],
        recipeQuery: [query, setQuery],
        preloaderState: [preloader, setPreloader],
        recipeLoading: [loading, setLoading],
        error: [errorMessage, setErrorMessage],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
