import React from "react";
import RecipeEditIngredient from "./RecipeEditIngredient";

export default function RecipeEdit({recipe}) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={recipe.name}
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cooking time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={recipe.cookTime}
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          id="servings"
          min="1"
          className="recipe-edit__input"
          value={recipe.servings}
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          type="text"
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          value={recipe.instructions}
        />
      </div>
      <br />

      <label className="recipe-edit__label">Ingredients</label>

      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>

        {recipe.ingredients.map(ingredient=>{
          return <RecipeEditIngredient 
          key={ingredient.id}
          ingredient = {ingredient}  
          />

        })}
        
        
      </div>
        <div className="recipe-edit__add-ingredients-btn-container">
          <button className="btn btn--primary">Add ingredients</button>
        </div>
    </div>
  );
}
