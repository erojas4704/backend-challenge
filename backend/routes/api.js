require("dotenv").config();
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/content', async (req, res) => {
    const content = await new Promise((resolve, reject) => {
        fs.readFile('./db/sample.json', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
        });
    });
    return res.json(content);
});

module.exports = router;