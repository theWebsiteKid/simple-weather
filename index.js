const express = require('express');
const path = require('path');

const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

// app running on port 3000
server.listen(3000, () => {
    console.log('SimpleWeather app running on port 3000')
});