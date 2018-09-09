const express = require('express');
const request = require('request');

const app = express();

// api params
let apiKey = '6aa6b5d216402a79cdb225a50c4ad9ab';
let zip = '30305';
let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`;

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
// app running on port 3000
app.listen(3000, () => {
    console.log('SimpleWeather app running on port 3000');
});