// proto/named.js

var Foo = function () {};

Foo.prototype.log = function() {
    console.log('Foo! - Exported from named prototype');
};

exports.Foo = Foo;
