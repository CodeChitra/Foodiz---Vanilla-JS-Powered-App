export default class View{
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