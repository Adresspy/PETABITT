const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../../db.js");

const getTemperaments = async () => {
  const api_url = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}` // peticion a la api
  );
  const api_info = await api_url.data; // traerla en idioma js
  const temperamentApi = api_info
    .map((ele) => ele.temperament) // mapeamos y traemos los temp de los elem
    .join() // los junto en un solo array
    .split(",") // y los modulizo en arrays, cuando alla una coma
    .sort(); // los organiza en orden abc
  await temperamentApi // espera todo lo de arriba
    .filter((temp, index) => temperamentApi.indexOf(temp) === index) // tiramos un filter
    .forEach((tempdog) => {
      tempdog.trim() !== "" &&
        Temperament.findOrCreate({
          // repasa esta verga
          where: {
            name: tempdog.trim(),
          },
        });
    });
  const apiTemp = Temperament.findAll();
  return apiTemp;
};

module.exports = { getTemperaments };
