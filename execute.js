var mongoose = require('mongoose');
var fs = require('fs');

var device = process.argv[2];
var file = process.argv[3];

fs.readFileSync(file).toString().split('\n');