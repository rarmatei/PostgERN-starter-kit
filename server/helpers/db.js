const { Pool } = require("pg");

//TODO move connection to a different file then import it here with the different configs
// https://github.com/CodeYourFuture/orula/blob/dev/server/knexfile.js
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cyf_hotels",
  password: "password",
  port: 5432
});

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
