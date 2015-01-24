var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, resp){
	fs.readFile(process.argv[3],function(err, data){
		if(err) {
			resp.send(500);
		}

		resp.json(JSON.parse(data));
	});
});

app.listen(process.argv[2]);