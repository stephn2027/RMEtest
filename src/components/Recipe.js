import React, { useContext } from 'react';
import IngredienstList from './IngredientsList';
import { RecipeContext } from './App';
import AuthorList from './AuthorList';

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    authors,
    user,
  } = props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div className="recipe-buttons">
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(id)}
            disabled={user ? false : true}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
            disabled={user ? false : true}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions: </span>
        <div className="recipe__value recipe__value--instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients: </span>
        <div className="recipe__value recipe__value--indented">
          <IngredienstList ingredients={ingredients} />
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Author(s): </span>
        <div className="recipe__value recipe__value--indented">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}
