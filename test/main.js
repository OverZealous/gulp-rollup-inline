/* jshint node: true */
/* global describe, it, beforeEach */
'use strict';

var fs = require("fs");
var path = require('path');
var es = require("event-stream");
var should = require("should");
var gulpRollupInline = require('../');

require('mocha');

function loadFile(p, name) {
	p = p || 'expected';
	return new gutil.File({
		path: path.join("test", p, name),
		cwd: "test/",
		base: path.join("test", p),
		contents: fs.readFileSync(path.join("test", p, name))
	})
}

describe('gulp-rollup-inline', function() {
	describe('default mode', function() {
		it('should call rollup at the end of the stream', function() {

		});
	});

	describe('watch mode', function() {
		it('should call rollup on every change', function() {

		});
	});
});
