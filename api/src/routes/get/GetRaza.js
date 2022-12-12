const express = require("express");
const { getAllDogs } = require("../../Controllers/All_info.js");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dogs = await getAllDogs();
    const perrofiltrao = await dogs.filter((ele) => ele.id === parseInt(id));
    if (perrofiltrao.length) res.status(200).send(perrofiltrao);
    else throw new Error(`oops... el perro con id ${id} no existe.`);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
