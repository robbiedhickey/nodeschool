var through = require('through');
var split = require('split');
var lineNo = 1;

process.stdin
	.pipe(split())
	.pipe(through(function(buffer){
		if(lineNo % 2 === 0){
			this.queue(buffer.toString().toUpperCase() + "\n");
		}
		else{
			this.queue(buffer.toString().toLowerCase() + "\n");
		}
		lineNo++;
	}))
	.pipe(process.stdout);