const express = require("express");
const router = express.Router();
const {
  getTemperaments,
} = require("../../Controllers/Temperament/Temperament_info");

router.get("", async (req, res) => {
  try {
    const temp = await getTemperaments();
    res.status(200).send(temp);
  } catch (error) {
    res.status(404).send(`Temperamento no encontrado!!!`);
  }
});

module.exports = router;
