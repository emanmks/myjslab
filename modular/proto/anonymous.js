// proto/anonymous.js

var Foo = function () {};

Foo.prototype.log = function() {
    console.log('Foo! - Exported from anonymous prototype');
};

module.exports = Foo;
