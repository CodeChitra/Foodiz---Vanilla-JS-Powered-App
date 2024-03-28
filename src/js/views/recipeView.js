import { Fraction } from 'fractional';
import icons from 'url:../../img/icons.svg';
class RecipeView {
  _parentContainer = document.querySelector('.recipe');
  _errorMessage = 'Cound Not Find The Recipe, Please Try Another One!';
  _clear() {
    this._parentContainer.innerHTML = '';
  }
  _generateRecipeMarkup(recipe) {
    return `
        <figure class="recipe__fig">
        <img src=${recipe.image} alt=${recipe.title} class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>
    
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-recipe recipe__info-recipe--minutes">${
            recipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-recipe recipe__info-recipe--people">${
            recipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>
    
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
    
        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
    
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(this._generateIngredientMarkup).join('')}
        </ul>
      </div>
    
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            recipe.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href=${recipe.source}
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
        `;
  }
  _generateIngredientMarkup(ing) {
    return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`;
  }
  render(recipe) {
    this._clear();
    const markup = this._generateRecipeMarkup(recipe);
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    this._clear();
    const markup = `<div class="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }
  //Publisher-Subscriber Pattern
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(event =>
      window.addEventListener(event, handler)
    );
  }
  showSpinner() {
    const markup = `
          <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;
    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }
}

export const recipeView = new RecipeView();
