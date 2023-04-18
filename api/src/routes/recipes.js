const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  createRecipe,
  getRecipeById,
} = require("../controller/recipeController");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    let data = await getAllRecipes();
    if (name) {
      let dataByName = await data.filter((obj) =>
        obj.name.toLowerCase().includes(name.toLowerCase())
      );
      dataByName.length
        ? res.status(200).json(dataByName)
        : res.status(404).json({ mesagge: "No existe la receta" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const infoFiltered = await getRecipeById(idRecipe);
    infoFiltered.length
      ? res.status(200).json(infoFiltered)
      : res
          .status(404)
          .json({ error: `No se encontro el personaje con el id ${idRecipe}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body;
    const newRecipe = await createRecipe({
      name,
      image,
      summary,
      healthScore,
      steps,
      diets,
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
