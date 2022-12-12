// TRAER INFO BD
const { Breed, Temperament } = require("../db");

const Get_info_DB = async () => {
  return await Breed.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = { Get_info_DB };
