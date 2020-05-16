var express = require('express');

var app = express();
var port = 8017;

var hostName = 'localhost';

app.get('/hello', (req, res) => {
    res.send('<h1>hello World</h1>');
})

app.listen(port, hostName, () => {
    console.log(`HEllo, i'm running at http://${hostName}:${port}/`)
})
