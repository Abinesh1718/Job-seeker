const express = require("express")

const router = express.Router()
const pool = require("../db");

router.get("/api", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM test');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
})






module.exports = router  