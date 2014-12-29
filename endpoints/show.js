'use strict';

/**
 * Show endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Show (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

/**
 * Get a partner show by ID
 *
 * @param {String} str show id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Show.prototype.get = function (args) {
  args = this.api.args(arguments);

  var options  = args.options || {},
      callback = args.fn,
      route    = ['show', args.str];

  if (!args.str && options.partner && options.show) {
    route = ['partner', options.partner, 'show', options.show];
  }

  return this.send(
    route,
    options,
    function (err, list) {
      return !err
        ? callback(null, list && list[0])
        : callback(err);
    }
  );
};

/**
 * Get Artworks for a partner show by ID
 *
 * @param {String} str show id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Show.prototype.artworks = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['partner', options.partner, 'show', options.show],
    options,
    args.fn
  );
};

/**
 * Get Installation images for a partner show by ID
 *
 * @param {String} str show id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Show.prototype.images = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['partner_show', args.str, 'images'],
    options,
    args.fn
  );
};

module.exports = Show;
