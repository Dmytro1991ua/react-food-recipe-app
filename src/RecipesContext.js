import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export const RecipesListProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState("");

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const apiUrl = `https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_RECIPES_ID}&app_key=${process.env.REACT_APP_RECIPES_KEY}`;
    try {
      const response = await axios.get(apiUrl);
      setRecipes(response.data.hits);
      console.log(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        recipesState: [recipes, setRecipes],
        recipesInput: [recipeInput, setRecipeInput],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
