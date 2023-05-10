import axios from "axios";
import {
  ADD_RECIPES,
  GET_RECIPE,
  ADD_BY_DIET,
  FILTER_BY_APIBD,
  ORDER_BY_NAME,
  GET_NAME_RECIPE,
  GET_DIETS,
  FILTER_BY_HEALTHSCORE,
} from "./actionTypes";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("http://localhost:3001/recipes");

      dispatch({ type: ADD_RECIPES, payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterRecipeByDiet = (payload) => {
  return { type: ADD_BY_DIET, payload };
};

export const filterByApiBd = (payload) => {
  return { type: FILTER_BY_APIBD, payload };
};

export const filterByHealthScore = (payload) => {
  return { type: FILTER_BY_HEALTHSCORE, payload };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const getNameRecipes = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      dispatch({ type: GET_NAME_RECIPE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/diets");
      dispatch({ type: GET_DIETS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postRecipe = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/recipes", form);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecipe = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      dispatch({ type: GET_RECIPE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
