import View from './View';
import icons from 'url:../../img/icons.svg';
class ResultView extends View {
  _parentContainer = document.querySelector('.results');
  _errorMessage = 'Cound Not Find Recipes For The Given Query, Please Try With Another One!';

  _generateRecipeMarkup() {
    return `${this._data.map(rec => `
    <li class="preview">
    <a class="preview__link" href=#${rec.id}>
      <figure class="preview__fig">
        <img src=${rec.image} alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${rec.title}</h4>
        <p class="preview__publisher">${rec.publisher}</p>
      </div>
    </a>
  </li>
    `)}
        `;
  }
}

export const resultView = new ResultView();
