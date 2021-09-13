import React from "react";
import RecipeEditIngredient from "./RecipeEditIngredient";
export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div className="recipe-edit__grid-container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="enter name"/>
          <label htmlFor="cookTime">Cooking time</label>
          <input type="number" name="cookTime" id="cookTime" placeholder=""/>
          <label htmlFor="servings">Servings</label>
          <input type="number" name="servings" id="servings" min="1"/>
          <label htmlFor="instructions">Instructions</label>
          <textarea type="text" name="instructions" id="instructions" placeholder="type in instructions"/>
      </div>
      <br />
      <div>
          <label>Ingredients</label>
          <div>
              <div>Name</div>
              <div>Amount</div>
              <div></div>
          </div>
            {/* Ingredient Component */}
            <RecipeEditIngredient/>
            <RecipeEditIngredient/>
          <div>
              <button>Add ingredients</button>
          </div>
      </div>
    </div>
  );
}
