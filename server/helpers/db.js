const { Pool } = require("pg");
const config = require("./__db/db-config")[process.env.NODE_ENV || "development"];

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
