'use strict';

/**
 * Tokens endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Token (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

/**
 * Responds with the OAuth token for this instance.
 *
 * @param {Object} options Additional credentials.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Token.prototype.oauth = function () {
  var self = this;
  var args = this.api.args(arguments);
  var params = this.api.merge(
    { grant_type: 'credentials' },
    this.api.credentials || {},
    args.options || {}
  );

  ['id', 'secret'].forEach(function (key) {
    params['client_' + key] = params[key];
    delete params[key];
  });

  //
  // Sets the token to this instance for future API calls.
  //
  function setToken(err, tokens) {
    var token = tokens && tokens.length && tokens[0];
    if (err || !token || !token.access_token) {
      return args.fn(err || new Error('No OAuth token returned.'));
    }

    self.api.authorization = token.access_token;
    self.api.authHeader = 'X-Access-Token';
    args.fn.apply(null, token);
  }

  return this.send(['oauth2', 'access_token'], {
    api: 'https://api.artsy.net',
    params: params
  }, setToken);
};

/**
 * Responds with the XApp token for this instance.
 *
 * @param {Object} options Additional credentials.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Token.prototype.xapp = function () {
  var args = this.api.args(arguments);

  //
  // Sets the token to this instance for future API calls.
  //
  function setToken() {
    console.dir(arguments);
    args.fn.apply(null, arguments);
  }

  return this.send(
    ['xapp_token'],
    this.api.merge({}, this.api.credentials || {}, args.options || {}),
    setToken
  );
};

module.exports = Token;
