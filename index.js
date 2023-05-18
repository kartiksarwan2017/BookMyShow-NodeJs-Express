require('dotenv').config();
const db = require('./config/mongoose');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', require('./routes'));

app.listen(5000, () => {
    console.log('My Express app is running');
});



