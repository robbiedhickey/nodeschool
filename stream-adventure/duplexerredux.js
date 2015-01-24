var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter) {
	var countries = {};
	var input = through(write, end);
	return duplexer(input, counter);

	function write(row) {
		countries[row.country] = (countries[row.country] || 0) + 1;
	}

	function end() {
		counter.setCounts(countries);
	}
};