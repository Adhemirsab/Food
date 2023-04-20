const axios = require("axios");
const { Diet } = require("../db");
const { API_KEY, API_KEY1 } = process.env;
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`;

const getApiInfo = async () => {
  const response = await axios.get(apiUrl);
  const dietTypes = response.data.results.map((el) => el.diets);
  const diets = dietTypes.flat();
  const dietsFiltered = diets.filter((value, index) => {
    return diets.indexOf(value) === index;
  });

  // creando en la base de datos
  dietsFiltered.forEach(async (diet) => {
    await Diet.findOrCreate({
      where: { name: diet },
    });
  });

  const allDiets = await Diet.findAll();
  return allDiets;
};

module.exports = getApiInfo;
