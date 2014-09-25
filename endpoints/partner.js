
/**
 * Partner endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Partner (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

/**
 * All available options for querying shows.
 *
 * @type {Array}
 * @private
 */
Partner.shows = [
  'artist_id',
  'artwork_id',
  'sort'
];

/**
 * Get all shows for the partner user.
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Partner.prototype.shows = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {},
      partner = args.str || options.partner;

  return this.send(
    ['partner', partner, 'shows.json'],
    this.api.options(options, Partner.shows),
    args.fn
  );
};

/**
 * All available options for querying artworks.
 *
 * @type {Array}
 * @private
 */
Partner.artworks = [
  'artist_id',
  'sort'
];

/**
 * Get all artworks for the partner user.
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Partner.prototype.artworks = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['partner', options.partner, 'artworks.json'],
    this.api.options(options, Partner.artworks),
    args.fn
  );
};

module.exports = Partner;