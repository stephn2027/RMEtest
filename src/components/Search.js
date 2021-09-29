import React from 'react'


export default function Search({searchQuery,setSearchQuery}){
  
    return (
        <form 
        action="/" method="get"
        className="recipe-list__search-bar-form"
        
        onSubmit={e=>e.preventDefault()}
            >
            <label htmlFor="recipe-search">
                <span className="visually-hidden">
                Search for recipes
                </span>
            </label>
            <input 
            type="text"
            value={searchQuery}
             id="recipe-search"
             placeholder="🔍 Search for recipes"
             name="search"
             onChange ={e=>setSearchQuery(e.target.value)}
            className="recipe-list__search-bar"
            />
            <button 
            type="submit"
            className="btn btn--primary"
            >Search</button>
        </form>
        
    )
}


