import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from '../Base';
import NoRecipesSelected from "./NoRecipesSelected";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import "../css/app.css"; //the only css import that connects different css components
import {gsap} from 'gsap';



//used to propagate state to all levels of code. no need to transfer data in a stair like pattern
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.App[recipes]';//just a string name for your local key

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);//state for recipes
  const [selectedRecipeId, setSelectedRecipeId] = useState();//state for selected item to propagate to edit page
  const selectedRecipe = recipes.find(recipe=>recipe.id === selectedRecipeId); //id of recipe that is selected or if there is one selected
  const timeline=gsap.timeline();
  
  
 
  const recipeContextValue ={//context value that will be passed on diff. levels of nested components
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    
  };

  useEffect(()=>{
    firebase.database().ref('recipes')
        // Sync the data.
        .on('value', snapshot => {
            if (snapshot.val())
                setRecipes(snapshot.val());
        });
        timeline.from('.background',{y:800,opacity:0,ease:'back.out(1.2)',duration:1.2,delay:1});
  },[]);

  useEffect(() => {
    firebase.database().ref('recipes').set(recipes)
    firebase.database().ref('recipes').update(recipes)
 }, [recipes])
  
  //persisting our local storage by using useEffect

  useEffect(()=>{
    const recipeKeyFromLocalStorage =  localStorage.getItem(LOCAL_STORAGE_KEY);
    recipeKeyFromLocalStorage===null?alert("no data in local storage"):setRecipes(JSON.parse(recipeKeyFromLocalStorage));
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  },[recipes]);

  

  function handleRecipeSelect(id){
    setSelectedRecipeId(id);
    }

  function handleRecipeChange(id,recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r=>r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }
  

  
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      cookTime: "",
      servings: 1,
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
      authors:[
        {
          id: uuidv4(),
          name:"",
        }
      ]
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }
  function handleRecipeDelete(id){
    if(selectedRecipeId != null && selectedRecipeId === id){
      setSelectedRecipeId(null);
    }

    setRecipes(recipes.filter(recipe=>recipe.id!==id))
  }
  

  return (
    <div className="background" >
  <RecipeContext.Provider value={recipeContextValue}>
      <Row>
      <Col>

      <RecipeList recipes={recipes} /> 
      </Col>
      <Col className="col">
     {selectedRecipe?selectedRecipe && <RecipeEdit recipe = {selectedRecipe}/>:<NoRecipesSelected/>}

      </Col>
     
      </Row>
     
      
  </RecipeContext.Provider>
  </div>
  )
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "Plain Chiken",
    cookTime: "1:45",
    servings: "3",
    instructions: `1.Put salt on chicken \n 2.Put chicken inside the oven \n3.Garnish with greens and serve`,
    ingredients: [
      {
        id: uuidv4(),
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: uuidv4(),
        name: "Salt",
        amount: "1 tsp",
      },
    ],
    authors: [
      {
        id: uuidv4(),
        name: "Chef Robert",
        
      },
      
    ],
  },
  {
    id: uuidv4(),
    name: "Pork Chop",
    cookTime: "2:45",
    servings: "2",
    instructions:
      "1.Put salt on pork \n 2.Put put inside the oven \n 3.Garnish with greens and serve",
    ingredients: [
      {
        id: uuidv4(),
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: uuidv4(),
        name: "Paprika",
        amount: "1 tsp",
      },
    ],
    authors: [
      {
        id: uuidv4(),
        name: "Chef John",
        
      },
      
    ],
  },
];

