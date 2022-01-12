import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../Base';
import NoRecipesSelected from './NoRecipesSelected';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import '../css/app.css'; //the only css import that connects different css components
import { gsap } from 'gsap';
import Header from './Header';

//used to propagate state to all levels of code. no need to transfer data in a stair like pattern
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.App[recipes]'; //just a string name for your local key

export default function App(props) {
  const [recipes, setRecipes] = useState(sampleRecipes); //state for recipes
  const [selectedRecipeId, setSelectedRecipeId] = useState(); //state for selected item to propagate to edit page
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  ); //id of recipe that is selected or if there is one selected
  const timeline = gsap.timeline();
  const { user } = props;

  const recipeContextValue = {
    //context value that will be passed on diff. levels of nested components
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  useEffect(() => {
    firebase
      .database()
      .ref('recipes')
      // Sync the data.
      .on('value', (snapshot) => {
        if (snapshot.val()) setRecipes(snapshot.val());
      });
    timeline.from('.background', {
      y: 900,
      opacity: 0,
      ease: 'back.out(1.2)',
      duration: 1.2,
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    firebase.database().ref('recipes').set(recipes);
    firebase.database().ref('recipes').update(recipes);
  }, [recipes]);

  //persisting our local storage by using useEffect

  useEffect(() => {
    const recipeKeyFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    recipeKeyFromLocalStorage === null
      ? alert('no data in local storage')
      : setRecipes(JSON.parse(recipeKeyFromLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      cookTime: '',
      servings: 1,
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: '',
        },
      ],
      authors: [
        {
          id: uuidv4(),
          name: '',
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }
  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(null);
    }

    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="background">
            <RecipeContext.Provider value={recipeContextValue}>
              <Row>
                <Col>
                  <RecipeList recipes={recipes} user={user} />
                </Col>
                <Col className="col">
                  {selectedRecipe ? (
                    selectedRecipe && <RecipeEdit recipe={selectedRecipe} />
                  ) : (
                    <NoRecipesSelected />
                  )}
                </Col>
              </Row>
            </RecipeContext.Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'OVEN BARBECUE RIBS',
    cookTime: '2:25',
    servings: '5',
    instructions: `1.Preheat oven to 350°F (180°C). \n 2.Peel off tough membrane that covers the underside/bony side of the ribs. Place on a baking sheet or tray lined with foil (or parchment paper).  \n 3.Combine together garlic powder, onion powder, paprika, salt, pepper, cumin and chili or Cayenne. Sprinkle seasoning over ribs and drizzle with oil. Rub the seasoning all over the ribs on both sides. Cover tray with foil and bake for 2 hours. \n 4.During the last 5 minutes of cook time, mix together sauce ingredients. \n 5.Remove ribs from the oven, remove foil and spread the tops of the ribs with the barbecue sauce mixture. \n 6.Increase oven temperature to 460°F (240°C). Return ribs to the oven, uncovered, and bake for a further 10 minutes. Change oven settings to broil (or grill) on medium-high heat to lightly char and caramelise the edges (about 3 minutes). \n 7.Rest for 10 minutes to allow the juices to recirculate back into the meat before slicing. Enjoy!  `,
    ingredients: [
      {
        id: uuidv4(),
        name: 'Ribs',
        amount: '4 pounds',
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '2 tsp',
      },
      {
        id: uuidv4(),
        name: 'Garlic powder',
        amount: '2 tsp',
      },
      {
        id: uuidv4(),
        name: 'Onion Powder',
        amount: '2 tsp',
      },
      {
        id: uuidv4(),
        name: 'Paprika',
        amount: '2 tsp',
      },
      {
        id: uuidv4(),
        name: 'BBQ sauce',
        amount: '2 cups',
      },
      {
        id: uuidv4(),
        name: 'Garlic minced',
        amount: '3 tbsp',
      },
      {
        id: uuidv4(),
        name: 'Worstershire sauce',
        amount: '1 tbsp',
      },
      {
        id: uuidv4(),
        name: 'Cayenne pepper',
        amount: '1 tbsp',
      },
    ],
    authors: [
      {
        id: uuidv4(),
        name: 'Chef Robert',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Pork Chop',
    cookTime: '2:45',
    servings: '2',
    instructions:
      '1.Put salt on pork \n 2.Put put inside the oven \n 3.Garnish with greens and serve',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        amount: '3 pounds',
      },
      {
        id: uuidv4(),
        name: 'Paprika',
        amount: '1 tsp',
      },
    ],
    authors: [
      {
        id: uuidv4(),
        name: 'Chef John',
      },
    ],
  },
];
