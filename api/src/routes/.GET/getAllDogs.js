const express = require("express");
const { getAllDogs } = require("../../Controllers/All_info.js");
const router = express.Router();

// ESTA FUNCION CORRESPONDE A GETALL Y GETQUERY

router.get("/", async (req, res) => {
  const { name } = req.query;
  let dogs = await getAllDogs();

  try {
    if (name) {
      let dogsName = await dogs.filter((ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase())
      );
      //
      console.log(dogsName);
      if (dogsName.length) res.status(200).send(dogsName);
      //
      else throw new Error(`oops... el perro ${name} no existe!`);
      //
    } else {
      res.status(200).send(dogs);
    }
    //
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
