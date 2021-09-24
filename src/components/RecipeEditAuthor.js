import React from 'react'

export default function RecipeEditAuthor(props) {
    const {handleAuthorChange, handleAuthorDelete, author} = props;

    function handleChange(changes){
        handleAuthorChange(author.id,{...author,...changes});
    }

    return (
        <>
        
             <input type="text"
             className="recipe-edit__input"
                value={author.name}
                onChange={e=>handleChange({name:e.target.value})}

              />
              <button 
                  type="submit"
                  className="btn btn--danger"
                onClick={e=>handleAuthorDelete(author.id)} 
              > &times;
              </button>

              
         
        </>
    )
}
