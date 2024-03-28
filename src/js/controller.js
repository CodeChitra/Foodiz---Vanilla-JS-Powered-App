import * as model from './model';
import { recipeView } from './views/recipeView';
import { resultView } from './views/resultView';
import { searchView } from './views/searchView';

async function controlRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if(!id) return;
    recipeView.showSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error)
    recipeView.renderError()
  }
}

async function controlSearch(){
  try {
    const query = searchView.getQuery();
    if(!query) return;
    await model.loadSearch(query);
    resultView.render(model.getSearchResults(1)); 
  } catch (err) {
    console.log(err);
  }
}
function init(){
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
}

init();