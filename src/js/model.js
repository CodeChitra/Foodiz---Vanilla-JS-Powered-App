import { BASE_URL } from "./utils/constants";
import { getJson } from "./utils/helpers";
export const state = {
    recipe: {},
    search: {
      search: "",
      results: [],
      page: 1
    }
}

export async function loadRecipe(id){
  try{
    const data = await getJson(BASE_URL + id);
    const { recipe } = data.data;
    state.recipe = {
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      source: recipe.source_url,
      image: recipe.image_url,
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      title: recipe.title,
    };
    console.log(state.recipe);
  }
    catch(err){
      throw err;
    }
}

export async function loadSearch(query){
  try {
    state.search.search = query;
    const data = await getJson(BASE_URL + "?search=" + query);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title
      }
    })
  } catch (err) {
    throw err;
  }
}

export function getSearchResults(page = state.search.page){
  state.search.page = page;
  const start = (page - 1)*10;
  const end = page*10;

  return state.search.results.slice(start, end);
}