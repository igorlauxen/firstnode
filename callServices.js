var http = require('http'),
	https = require('https');

module.exports = {
	doRequest : function(options, onResult){
	    console.log("rest::getJSON");
	    var prot = options.port == 443 ? https : http;
	    var req = prot.request(options, function(res){
	        var output = '';
	        console.log(options.host + ':' + res.statusCode);
	        res.setEncoding('utf8');

	        res.on('data', function (chunk) {
	            output += chunk;
	        });

	        res.on('end', function(oEnd) {
	            var obj = JSON.parse(output);
	            onResult(res.statusCode, obj);
	        });
	    });

	    req.on('error', function(err) {
	        res.send('error: ' + err.message);
	    });

	    req.end();
	}
};