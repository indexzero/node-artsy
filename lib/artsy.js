/*
 * artsy.js: Main client responsible for interacting with the Artsy API
 *
 * (C) 2011, Charlie Robbins
 *
 */

var Artsy = module.exports = function (options) {

};

Artsy.prototype.resource = function (name, methods) {
  var sub = {};
  sub.__proto__ = Artsy.prototype;

  //
  // Define a sub resource on the Artsy client prototype
  // by reducing the methods (GET, POST, PUT, etc) into
  // a new object which still has access to the calling scope.
  //
  Artsy.prototype[name] = methods.reduce(function (obj, name), {
    obj[name] = function (options) {

    };
  }, sub);
};

Artsy.prototype.request = function (fns, callback) {

};