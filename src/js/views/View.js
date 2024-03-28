import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  _clear() {
    this._parentContainer.innerHTML = '';
  }
  render(data) {
    if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
    this._data = data;
    this._clear();
    const markup = this._generateRecipeMarkup();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    this._clear();
    const markup = `<div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
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
