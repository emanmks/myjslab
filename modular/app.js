// Topic #1
// The simplest module ever
// require ('./simplest/simplest.js');


// Topic #2
// The globally accessible function
// require ('./global/global.js');
// foo();

// Topic #3
// Exporting anonymous function
// var bar = require('./anonymous/anonymous.js');
// bar();

// Topic #4
// Exporting named function
// var fizz = require('./named/named.js').fizz;
// fizz();

// Topic #5 
// Exporting anonymous object
// var buzz = require('./objects/anonymous.js');
// buzz.log();

// Topic #6
// Exporting named object
// var obj = require('./objects/named.js').Buzz;
// obj.log();

// Topic #7
// Exporting anonymous prototype
// var Foo = require('./proto/anonymous.js');
// var fooInstance = new Foo();
// fooInstance.log();

// Topic #8
// Exporting named prototype
var Foo = require('./proto/named.js').Foo;
var fooInstance = new Foo();
fooInstance.log();

