
/**
 * Artists endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Artists (api) {
  this.send = api.send.bind(api);
  this.api = api;
}

/**
 * List avaiable artists? This seems broken
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artists.prototype.list = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artists'],
    options,
    args.fn
  );
};

/**
 * Get an artist by name
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artists.prototype.get = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artist', args.str],
    options,
    args.fn
  );
}

module.exports = Artists;
