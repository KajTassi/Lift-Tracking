const Pool = require("pg").Pool;

const pool = new Pool({
    user: "aaxfvylh",
    password: "kth18822",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;