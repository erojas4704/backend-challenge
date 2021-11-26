require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use('/api', api);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})