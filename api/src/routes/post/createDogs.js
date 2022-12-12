const express = require("express");
const { Breed, Temperament } = require("../../db");
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
    image,
    createInDb,
    temperament,
  } = req.body;

  const dogModel = await Breed.create({
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
    image,
    createInDb,
  });

  const dogTemperament = await Temperament.findAll({
    where: {
      name: temperament,
    },
  });

  await dogModel.addTemperament(dogTemperament);
  res.status(201).send(`¡el perro ${dogModel.name} se creo correctamente!`);
});

module.exports = router;
