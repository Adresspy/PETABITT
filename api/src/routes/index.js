const { Router } = require("express");
const getDogs = require("./.GET/getAllDogs");
const getDogsById = require("./.GET/GetRaza.js");
const createDog = require("./.POST/createDogs");
const getTemperaments = require("./.GET/getTemperament");
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
