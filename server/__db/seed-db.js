const { Pool } = require("pg");
const config = require("./db-config")[process.env.NODE_ENV || "development"];
const fs = require("fs");

const createDb = fs.readFileSync(require.resolve("./recreate-db.sql")).toString();
const pool = new Pool(config);

pool.query(createDb, function(err, result) {
  if (err) {
    console.log("error: ", err);
    process.exit(1);
  }
  process.exit(0);
});
