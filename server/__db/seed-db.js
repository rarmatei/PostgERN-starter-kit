const { Pool } = require("pg");
const config = require("../db-config")[process.env.NODE_ENV || "development"];
var fs = require("fs");

//TODO change names of these and the sql file names
var sql1 = fs.readFileSync(require.resolve("./create-db.sql")).toString();
// var sql2 = fs.readFileSync(require.resolve("./recreate_db.sql")).toString();

const pool = new Pool(config);

//TODO need to create/user DB for initial install
//TODO make this nicer
pool.query(sql1, function(err, result) {
  if (err) {
    console.log("error: ", err);
    process.exit(1);
  }
  process.exit(0);
});
