const axios = require("axios");
const { Recipe, Diet } = require("../db");
const API_KEY = process.env.API_KEY;
const API_KEY1 = process.env.API_KEY1;

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=99`;

// const apiUrlId = `https://api.spoonacular.com/recipes/{id}/information?apiKey=${API_KEY}`;

const getApiInfo = async () => {
  const response = await axios.get(apiUrl);
  const apiInfo = await response.data.results.map((el) => {
    return {
      id: el.id,
      name: el.title,
      image: el.image,
      summary: el.summary,
      healthScore: el.healthScore,
      // steps: el.analyzedInstructions[0].steps.map((el) => el),
      diets: el.diets?.map((element) => element),
      steps:
        el.analyzedInstructions[0] && el.analyzedInstructions[0].steps
          ? el.analyzedInstructions[0].steps.map((el) => el.step).join(" \n")
          : "",
    };
  });
  return apiInfo;
};

const getBbInfo = async () => {
  const bdInfo = await Recipe.findAll({
    // where: query,
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        //tabla intermedia
        attributes: [],
      },
    },
  });
  return bdInfo;
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const bdInfo = await getBbInfo();
  const infoTotal = apiInfo.concat(bdInfo);
  return infoTotal;
};

const createRecipe = async (recipe) => {
  const { name, image, summary, healthScore, steps, diets } = recipe;
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });

  newRecipe.addDiets(diets);
  return newRecipe;
};

const getRecipeById = async (id) => {
  const infoTotal = await getAllRecipes();
  const infoFiltered = await infoTotal.filter((el) => el.id == id);
  return infoFiltered;
};

module.exports = { getAllRecipes, createRecipe, getRecipeById };
