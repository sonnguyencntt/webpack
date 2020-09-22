var mysql = require('mysql');

module.exports.pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database : "caffee",
  multipleStatements: true
})


