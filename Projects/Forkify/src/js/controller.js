import '../sass/main.scss';
import '../img/logo.png';
import '../img/icons.svg';
import '../img/favicon.png'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=2eb85c55-4900-48aa-b99b-c1715e010113

///////////////////////////////////////

const showRecipe = async function() {
    try {
      const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
      const data = await response.json();

      if(!response.ok) {
        throw new Error(`${data.message} (${res.status})`);
      }

      console.log(response,data);
      let { recipe } = data.data;

      recipe = {
        id: recipe.id,
        title: recipe.title,
      }

    } catch (err) {
      alert(err)
    }
}


showRecipe()