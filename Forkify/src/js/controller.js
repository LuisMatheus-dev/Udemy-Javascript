import * as model from './model.js'

import { MODAL_CLOSE_SEC } from './config.js';
import '../sass/main.scss';
import '../img/logo.png';
import '../img/favicon.png';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js'
import addRecipeView from './views/addRecipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=2eb85c55-4900-48aa-b99b-c1715e010113

///////////////////////////////////////

const controlRecipes = async function() {
  try {
      const hash = window.location.hash.slice(1);

      if (!hash) return;
      recipeView.renderSpinner();

      //Update results view to mark selected search result
      resultsView.update(model.getSearchResultsPage());
      
      //Updating bookmarks view
      bookmarksView.update(model.state.bookmarks);

      //Loading Recipe
      await model.loadRecipe(hash);

      //Rendering recipe
      recipeView.render(model.state.recipe);

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

const controlServings = function(newServings) {
  
  //Update the recipe servings 
  model.updateServings(newServings); 

  //Update the recipe view
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function() {

  //1) Add/Remove bookmark 
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
     model.deleteBookmark(model.state.recipe.id);
  }

  //2) Update recipe View
  recipeView.update(model.state.recipe);

  //3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function(newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //Render recipe
    recipeView.render(model.state.recipe);

    //Sucess Message
    addRecipeView.renderMessage();

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //Change hash in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    
    
    setTimeout(function() {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

  
  } catch(error) {
    console.error(error)
    addRecipeView.renderError(error.message);
  };
}

const init = function() {
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe)
};

init();
