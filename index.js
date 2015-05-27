
var debug = require('diagnostics')('artsy');
var Mana = require('mana');

Mana.extend({
  /**
   * Do constructor things
   *
   * @constructor
   * @api public
   *
   **/
  initialise: function initialise (options) {
    options = options || {};

    this.api           = options.url    || 'https://api.artsy.net/api/v1/';
    this.authHeader    = options.header || 'X-XAPP-Token';
    this.credentials   = options.credentials || options.creds;
    this.authorization = options.token;

    if (!this.authorization && !this.credentials) {
      throw new Error('Token or credentials required to make Artsy requests.');
    }
  },
  options: function (opts, params) {
    opts = opts || {}
    opts.params = opts.params || params || [];

    var defaults = { page: 1, size: 100 };
    Object.keys(defaults).forEach(function (key) {
      if (Array.isArray(opts.params)) {
        if (!~opts.params.indexOf(key)) opts.params.push(key);
        if (!opts[key]) opts[key] = defaults[key];
      }
      else {
        if (!(key in opts.params)) opts.params[key] = defaults[key];
      }
    });

    return opts;
  }
}).drink(module);
