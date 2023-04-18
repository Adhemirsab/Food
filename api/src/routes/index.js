const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const recipesRouter = require("./recipes");
const dietsRouter = require("./diets");

router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

module.exports = router;
