import React,{useContext} from "react";
import RecipeEditIngredient from "./RecipeEditIngredient";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({recipe}) {
  const {handleRecipeChange,handleRecipeSelect} =  useContext(RecipeContext);
  //helper function to handle multiple input changes so we dont have to repeat putting the handlerecipechange function in every input
  function handleChange(changes){
    handleRecipeChange(recipe.id,{...recipe,...changes})
  }
  
  //end of helper function( useful when all the elements share the same functional changes or the same function);
  function handleIngredientChange(id,ingredient){
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(i=>i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ingredients:newIngredients})

  }

  function handleIngredientsAdd(){
    const newIngredientAdd = {
      id:uuidv4(),
      name:'',
      amount:'',
    }
    handleChange({ingredients:[...recipe.ingredients,newIngredientAdd]})
  }

  function handleIngredientsDelete(id){
    handleChange({ingredients:recipe.ingredients.filter(ingredient=>ingredient.id !== id)})
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button 
        className="btn recipe-edit__remove-button"
        onClick={()=>handleRecipeSelect(undefined)}
        >&times;
        </button>
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
          onChange={event=>handleChange( {name: event.target.value})}
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
          onChange={event=>handleChange( {cookTime: event.target.value})}
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
          onChange={event=>handleChange( {servings: Number(event.target.value)||""})}
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
          onChange={event=>handleChange( {instructions: event.target.value})}
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
          handleIngredientChange = {handleIngredientChange} 
          handleIngredientsDelete = {handleIngredientsDelete} 
          />

        })}
        
        
      </div>
        <div className="recipe-edit__add-ingredients-btn-container">
          <button 
          className="btn btn--primary"
          onClick={()=>handleIngredientsAdd()}
          >Add ingredients</button>
        </div>
    </div>
  );
}
