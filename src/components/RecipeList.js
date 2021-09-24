import React, { useContext, useState } from "react";
import { RecipeContext } from "./App";
import Recipe from "./Recipe";
import Search from "./Search";


export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredRecipes = filterRecipe(recipes,searchQuery);
  
  function filterRecipe(recipes,searchQuery){
    if(!searchQuery){
      return recipes;
    }
    return recipes.filter(recipe=>{
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(searchQuery);

    })
    
  }


  return (
    <>
      <div className="recipe-list">
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <div>
          
          {filteredRecipes.map(recipe=>(
            <Recipe key={recipe.id} {...recipe}/>
          )
              
          )}
        </div>

        <div className="recipe-list__add-recipe-btn-container">
          <button className="btn btn--primary" onClick={handleRecipeAdd}>
            Add a recipe
          </button>
        </div>
      </div>
    </>
  );
}
