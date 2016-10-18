//execution of class
var express = require('express'),
	app = express(),
	requestHandler = require('./callServices.js'),
	router = express.Router();

var options = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?q=SaoLeopoldo&APPID=76f56e498b725129763eabd06f54c400',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

app.get('/weather', function (req, res) {
   requestHandler.doRequest(options, function(statusCode, results){
		console.log('statusCode: '+ statusCode);
		console.log(results);
		res.send(results);
	});
});

app.get('/', function (req, res) {
  res.send('Hello World!'); 
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8100, "localhost");