var Buzz = function () {};

Buzz.prototype.log = function() {
    console.log('Buzz! - exporting an anonymous object');
};

module.exports = new Buzz();
