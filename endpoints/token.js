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
  var args = this.api.args(arguments);
  var self = this;

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
    args.fn(null, token);
  }

  return this.send(['oauth2', 'access_token'], {
    params: this.credentials(args, { grant_type: 'credentials' }),
    api: 'https://api.artsy.net'
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
  var self = this;

  //
  // Sets the token to this instance for future API calls.
  //
  function setToken(err, tokens) {
    var token = tokens && tokens.length && tokens[0];
    if (err || !token || !token.xapp_token) {
      return args.fn(err || new Error('No XApp token returned.'));
    }

    self.api.authorization = token.xapp_token;
    args.fn(null, token);
  }

  return this.send(
    ['xapp_token'],
    { params: this.credentials(args) },
    setToken
  );
};

/**
 * Responds with the correct querystring params based on the
 * pre-parsed `args` and optional `defaults`.
 *
 */
Token.prototype.credentials = function (args, defaults) {
  var params = this.api.merge(
    defaults || {},
    this.api.credentials || {},
    args.options || {}
  );

  ['id', 'secret'].forEach(function (key) {
    params['client_' + key] = params[key];
    delete params[key];
  });

  return params;
};

module.exports = Token;
