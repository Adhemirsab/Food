import {
  ADD_RECIPES,
  ADD_BY_DIET,
  FILTER_BY_APIBD,
  ORDER_BY_NAME,
  GET_NAME_RECIPE,
  POST_RECIPE,
  GET_DIETS,
  GET_RECIPE,
} from "./actionTypes";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  recipe: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };

    case ADD_BY_DIET:
      const allRecipes = state.allRecipes;
      const dietFiltered =
        action.payload === "All"
          ? allRecipes
          : allRecipes.filter((el) => el.diets.join().includes(action.payload));
      return {
        ...state,
        recipes: dietFiltered,
      };
    case FILTER_BY_APIBD:
      const allRecipes2 = state.allRecipes;
      const createdFilter =
        action.payload === "created"
          ? allRecipes2.filter((el) => el.createInDb)
          : allRecipes2.filter((el) => !el.createInDb);
      return {
        ...state,
        recipes: action.payload === "All" ? state.allRecipes : createdFilter,
      };

    case ORDER_BY_NAME:
      let sortArr =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        recipes: sortArr,
      };
    case GET_NAME_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    case POST_RECIPE:
      return {
        ...state,
      };
    case GET_DIETS: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
