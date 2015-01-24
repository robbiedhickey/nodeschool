var request = require('request');

var r = request.post("http://localhost:8000");

console.log(r);

process.stdin.pipe(r).pipe(process.stdout);