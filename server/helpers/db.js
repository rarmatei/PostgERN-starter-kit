const { Pool } = require("pg");
const config = require("../config");

const pool = new Pool(config);

const getHotels = () => {
  return new Promise(resolve => {
    pool.query("SELECT * FROM hotels", (error, result) => {
      resolve(result.rows);
    });
  });
};

const getUsers = () => {
  return Promise.resolve([{ user: "test" }]);
};

module.exports = {
  getUsers,
  getHotels
};
