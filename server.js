'use strict'; // strict mode

// node.js requires
require('dotenv').config();
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
// initialize express app
const app = express();

// env variables
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

// api params
let zip = '30305';
let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`;

// api request
request(url, (err, res, body) => {
    if (err) {
        throw err;
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp}°F in ${weather.name}.`;
        console.log(message);
    }
});

// serve static files in public directory
app.use(express.static('public'));
// parse incoming JSON data (req.body obj)
app.use(bodyParser.json());
// app running on port 3000
app.listen(PORT, () => {
    console.log('SimpleWeather running on port 3000');
});