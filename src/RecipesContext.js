import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export const RecipesListProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPES_ID}&app_key=${process.env.REACT_APP_RECIPES_KEY}`;
      try {
        const response = await axios.get(apiUrl);
        setRecipes(response.data.hits);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [query]);

  return (
    <RecipesContext.Provider
      value={{
        recipesState: [recipes, setRecipes],
        recipesInput: [recipeInput, setRecipeInput],
        recipeQuery: [query, setQuery],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
