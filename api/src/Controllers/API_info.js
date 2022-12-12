const axios = require("axios");
const { API_KEY } = process.env;

const Api_info = async () => {
  const APIURL = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}` // espera respuesta de api
  );

  const info = await APIURL.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      min_height: dog.height.metric.split("-")[0].trim(),
      max_height: dog.height.metric.split("-").reverse()[0].trim(),
      min_weight: dog.height.metric.split("-")[0].trim(),
      max_weight: dog.height.metric.split("-").reverse()[0].trim(),
      life_span: dog.life_span,
      image: dog.image.url,
      temperament: dog.temperament,
    };
  });
  return info;
};

module.exports = { Api_info };
