import '../sass/main.scss';
import '../img/logo.png';
import '../img/_icons.svg';
import '../img/favicon.png';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

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

const renderSpinner = function(parentEl) {
  const markup = `
    <div class="spinner">  
      <svg>
        <use href="#_icons_icon-loader"></use>
      </svg>
    </div> 
  `;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin',markup);
}



const showRecipe = async function() {
    try {
      renderSpinner(recipeContainer);

      const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
      const data = await response.json();

      if(!response.ok) {
        throw new Error(`${data.message} (${res.status})`);
      }

      // Extraindo dados
      let {
        id,
        title,
        publisher,
        source_url: sourceUrl, //Padronizando Dado
        image_url: image,
        servings,
        cooking_time: cookingTime,
        ingredients

      } = data.data.recipe;

      let markup = `
        <figure class="recipe__fig">
          <img src="${image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="#_icons_icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="#_icons_icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">4</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="#_icons_icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="#_icons_icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
            <svg>
              <use href="#_icons_icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="#_icons_icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${ingredients.map(ing => {
              return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="#_icons_icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ing.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                  </div>
                </li>
              `;
            }).join('')}

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="#_icons_icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${sourceUrl}"
            target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
              <use href="#_icons_icon-arrow-right"></use>
            </svg>
          </a>
        </div>`
    
    //Limpando mensagem de boas vindas
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin',markup);

    } catch (err) {

      alert(err)
    }
}


showRecipe()