import React ,{ useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeList from "./RecipeList";
import "../css/app.css"





function App() {
  
  const [recipes,setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name:'New',
      cookTime:'1:00',
      servings: 1,
      instructions: "Instr.",
      ingredients:[
        {
        id:uuidv4(), 
        name:"Name",
        amount:"1 tbsp" }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  
  return (
    <RecipeList 
    recipes ={recipes}
    handleRecipeAdd = {handleRecipeAdd}
    />
  )

  
  
}



const sampleRecipes = [
  {
    id: uuidv4(),
    name:"Plain Chiken",
    cookTime:"1:45",
    servings:"3",
    instructions: `1.Put salt on chicken \n 2.Put chicken inside the oven \n3.Garnish with greens and serve`,
    ingredients: [
      {
        id:uuidv4(),
        name:"Chicken",
        amount:"2 pounds"
      },
      {
      id:uuidv4(),
      name:"Salt",
      amount:"1 tsp"
      },
    ]
  },
  {
    id: uuidv4(),
    name:"Pork Chop",
    cookTime:"2:45",
    servings:"2",
    instructions: "1.Put salt on pork \n 2.Put put inside the oven \n 3.Garnish with greens and serve",
    ingredients: [
      {
        id:uuidv4(),
        name:"Pork",
        amount:"3 pounds"
      },
      {
        id:uuidv4(),
        name:"Paprika",
        amount:"1 tsp"
        },
    ],
  },
]

export default App;
