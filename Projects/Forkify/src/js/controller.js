import * as model from './model.js'

import '../sass/main.scss';
import '../img/logo.png';
import '../img/favicon.png';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=2eb85c55-4900-48aa-b99b-c1715e010113

///////////////////////////////////////



const controlRecipes = async function() {
    try {
      const hash = window.location.hash.slice(1);
      console.log(hash)

      if (!hash) return;
      recipeView.renderSpinner();


      //Loading Recipe
      await model.loadRecipe(hash);
      
      const { recipe } = model.state;

      //Rendering recipe
      recipeView.render(recipe);


    } catch (error) {
      console.error(error)
      recipeView.renderError();
    };
        
};

const controlSearchResults = async function() {

  try {
    //1) Get searhc query 
    let query = searchView.getQuery();
    
    if(!query) return;
    
    //2) Load search results
    await model.loadSearchResults(query);

    //3) Render results 
    console.log(model.state.search.results)

  } catch(error) {
    console.error(error)
  }
}


const init = function() {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
};

init();
