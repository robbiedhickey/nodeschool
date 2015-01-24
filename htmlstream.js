var trumpet = require('trumpet')();
var through = require('through');

process.stdin.pipe(trumpet);

console.log(trumpet.select('.loud'));