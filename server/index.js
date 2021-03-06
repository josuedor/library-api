const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require("./../config")
mongoose.connect(config.db.url);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api = require('./api/v1');

app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res, next) =>{
    res.status(404);
    res.json({ 
        message: "Not found"
    });
});

app.use((err, req, res, next) =>{
    res.status(500);
    res.json({ 
        message: err.message
    });
});

module.exports = app;