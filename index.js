
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

    this.api = options.url || 'https://api.artsy.net/api/v1/';
    // TODO: Make this conditional because it can be X-Access-Token as well
    this.authHeader = 'X-XAPP-Token';
    this.authorization = options.token;

    if (!this.authorization)
      throw new Error('Token required to make api requests, please generate one');

  }
}).drink(module);
