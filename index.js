const express = require('express');
const request = require('request');

const app = express();

// api request
request('https://api.openweathermap.org/data/2.5/weather?zip=30305&appid=6aa6b5d216402a79cdb225a50c4ad9ab', 
    (err, res, body) => {
        if (!err && res.statusCode == 200) {
            console.log('body:', body);
        } else {
            console.log('error:', error);
        }
    }
);
// serve static files in public directory
app.use(express.static('public'));
// app running on port 3000
app.listen(3000, () => {
    console.log('SimpleWeather app running on port 3000');
});