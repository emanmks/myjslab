// named.js
var Buzz = function() {};

Buzz.prototype.log = function() {
    console.log('Buzz! - exporting a named object');
};

exports.Buzz = new Buzz();
