import * as model from './model.js'

import '../sass/main.scss';
import '../img/logo.png';
import '../img/favicon.png';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

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
    resultsView.renderSpinner();

    //1) Get searhc query 
    let query = searchView.getQuery();
    
    if(!query) return;
    
    //2) Load search results
    await model.loadSearchResults(query);

    //3) Render results 
    resultsView.render(model.getSearchResultsPage());
    
    //4) Render pagination buttons
    paginationView.render(model.state.search);   

  } catch(error) {
    console.error(error);
  }
}

const controlPagination = function(goToPage) {
  //1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));
    
  //4) Render NEW pagination buttons
  paginationView.render(model.state.search); 
}


const init = function() {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination);
};

init();
