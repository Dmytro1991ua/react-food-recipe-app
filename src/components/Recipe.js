import React from "react";

const Recipe = ({ recipe }) => {
  // destructure recieved recipe data and then individual object
  const { recipe: recipeItem } = recipe;
  const { label, image, url, ingredients } = recipeItem;
   return (
      <div>
         
     </div>
  );
};

export default Recipe;
