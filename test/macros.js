var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../');

var config;

//
// Load our required config and exit if it doesn't exist
//
try {
  config = require('../dist/artsy-api');
  if (!config.xapp && !config.token) {
    throw new Error('Please write an XAPP key to ./dist/artsy-api.json');
  }
}
catch (ex) {
  console.dir(ex.message);
  return process.exit(1);
}

//
// Create an Artsy client
//
exports.client = new Artsy(config);

//
// ### function call (arg, context)
// Calls the specified method in the name of the context
// with the arguments supplied.
//
exports.call = function (arg, context) {
  var args = Array.prototype.slice.call(arguments),
      outer;

  outer = {
    topic: function () {
      var parts    = this.context.name.split('.'),
          resource = parts[0],
          method   = parts[1];

      exports.client[resource][method](arg, this.callback);
    }
  };

  Object.keys(context).forEach(function (key) {
    outer[key] = context[key];
  });

  return outer;
};
