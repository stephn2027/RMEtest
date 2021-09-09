import React from "react"
import RecipeList from "./RecipeList";
import "../css/app.css"





function App() {
  const recipeRef = Object.keys(React.createRef());
  return (
    <RecipeList recipes ={sampleRecipes}
      key={recipeRef}
    />
  )
  
}

const sampleRecipes = [
  {
    id: 1,
    name:"Plain Chiken",
    cookTime:"1:45",
    servings:"3",
    instructions: `1.Put salt on chicken \n 2.Put chicken inside the oven \n3.Garnish with greens and serve`,
    ingredients: [
      {
        id:1,
        name:"Chicken",
        amount:"2 pounds"
      },
      {
      id:2,
      name:"Salt",
      amount:"1 tsp"
      },
    ]
  },
  {
    id: 2,
    name:"Pork Chop",
    cookTime:"2:45",
    servings:"2",
    instructions: "1.Put salt on pork \n 2.Put put inside the oven \n 3.Garnish with greens and serve",
    ingredients: [
      {
        id:1,
        name:"Pork",
        amount:"3 pounds"
      },
      {
        id:2,
        name:"Paprika",
        amount:"1 tsp"
        },
    ],
  },
]

export default App;
