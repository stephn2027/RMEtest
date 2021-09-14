import React from "react";

export default function RecipeEditIngredient(props) {
  const { ingredient, handleIngredientChange,handleIngredientsDelete } = props;
  

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  

 
  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.name}
        onChange={event => handleChange({ name: event.target.value })}
      />
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.amount}
        onChange={event => handleChange({ amount: event.target.value })}
      />
      <button 
      className="btn btn--danger"
      onClick={()=>handleIngredientsDelete(ingredient.id)}
      >&times;
      </button>
    </>
  );
}
