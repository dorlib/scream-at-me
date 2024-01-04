"use strict";
exports.__esModule = true;
var express = require("express");
var say = require('say');
var app = express();
var PORT = 3000;
// Middleware to parse JSON requests
app.use(express.json());
app.post('/speak', function (req, res) {
    var text = req.body.text;
    if (!text) {
        return res.status(400).send('Text input missing');
    }
    say.speak(text, null, 1, function (err) {
        if (err) {
            console.error('Error:', err);
            return res.status(500).send('Error occurred while speaking');
        }
        res.send('Speech generated successfully');
    });
});
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
