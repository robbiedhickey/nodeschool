var through = require('through');

var toUpperCase = through(function(buffer){
	this.queue(buffer.toString().toUpperCase());
});

process.stdin.pipe(toUpperCase).pipe(process.stdout);
