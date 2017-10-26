//Test server
var express = require('express');
var app = express();

// app.get('/', function (req, res) {
// //   res.send('Hello World!');
//     app.use(express.static('public'));
// });

app.use(express.static('public'));

app.listen(6969, function () {
  console.log('Example app listening on port 6969 lol');
})