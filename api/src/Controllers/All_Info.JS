const { Api_info } = require("./API_info");
const { Get_info_DB } = require("./DB_info.js");

const getAllDogs = async () => {
  const api_result = await Api_info();
  const db_result = await Get_info_DB();
  const results = await api_result.concat(db_result);
  return results;
};

module.exports = { getAllDogs };
