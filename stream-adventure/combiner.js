var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');

module.exports = function(){

	function group(line){
	}

	function write(line){
	}

	return combine(
		split(),
		through(group, write)
	);
};