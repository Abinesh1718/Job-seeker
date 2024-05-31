const { Client } = require("pg")


const pool = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "harinima",
    database: "first"
})
pool.connect();


module.exports = pool