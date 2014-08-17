
/**
 * Artist endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Artist (api) {
  this.send = api.send.bind(api);
  this.api = api;
}


/**
 * Get an artist by name
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.get = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artist', args.str],
    options,
    args.fn
  );
}

module.exports = Artist;
