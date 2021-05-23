import { API_URL } from './config.js';
import { getJSON } from './helpers/helper.js';

export const state = {
  recipe: {},
}

export const loadRecipe = async function(hash) {
    try {
    
      const data = await getJSON(`${API_URL}/${hash}`)
  
      // Extraindo dados
      const { recipe } = data.data;

      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients
      }

      console.log(state);

    } catch(error) {
      alert(error)
    }
}