const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.listen(port, function () {
  console.log("running...");
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));