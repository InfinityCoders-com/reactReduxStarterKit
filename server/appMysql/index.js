const con = require('../config/connectMysql');

con.query('show databases', function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
});
