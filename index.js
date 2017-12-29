var express = require('express'),
		app = express();

var port = 3000,
		host = '0.0.0.0';

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(port, host);
console.log("Listening on %s:%d", host, port );