const { Router } = require("express");
const getDogs = require("./get/getAllDogs");
const getDogsById = require("./get/GetRaza.js");
const createDog = require("../routes/post/createDogs");
const getTemperaments = require("../routes/get/getTemperament");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", getDogs);
router.use("/dogs", getDogsById); //
router.use("/dogs", createDog); //
router.use("/temperaments", getTemperaments); //

module.exports = router;
