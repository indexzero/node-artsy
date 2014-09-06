
/**
 * Artist endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Artist (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

/**
 * Get an artist by id `first-last`
 *
 * @param {String} str Artists id
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
};

/**
 * Update an artist by ID
 *
 * @param {String} str Artists id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.put =
Artist.prototype.update = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  // TODO: What are the params we are submitting if we are using this?
  return this.send(
    ['artist', args.str],
    this.api.merge(options, {
      method: 'PUT'
    }),
    args.fn
  );
};

/**
 * Create an artist
 *
 * @param {String} str Artists id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.create = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  //
  // TODO: what are we submitting if this is being used?
  //
  return this.send(
    ['artist.json'],
    this.api.merge(options, {
      method: 'POST'
    }),
    args.fn
  );
};

/**
 * Delete an artist
 *
 * @param {String} str Artists id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.del = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['artist', args.str],
    options,
    args.fn
  )
};

/**
 * Return a list of the artists artwork
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.artwork = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort', 'gene_id', 'filter', 'published'
  ]);

  return this.send(
    ['artist', args.str, 'artworks.json'],
    options,
    args.fn
  );
};

/**
 * Return a more detailed list of artwork
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.artworkAll = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort', 'gene_id', 'filter'
  ]);

  return this.send(
    ['artist', args.str, 'artworks', 'all.json'],
    options,
    args.fn
  );
};

/**
 * Get auction lots by an artist
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.auctionLots = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artist', args.str, 'auction_lots.json'],
    options,
    args.fn
  );
};

/**
 * Return an artists genome
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.genome = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artist', args.str, 'genome.json'],
    options,
    args.fn
  );
};

/**
 * Return an artists genome map
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.genomeMap = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artist', args.str, 'genome', 'map.json'],
    options,
    args.fn
  );
};

/**
 * Return an artists genes
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.genes = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor'
  ]);

  return this.send(
    ['artist', args.str, 'genome', 'genes.json'],
    options,
    args.fn
  );
};

/**
 * Get an artists followers on Artsy
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.followers = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'cursor', 'offset'
  ]);

  return this.send(
    ['artist', args.str, 'follow', 'users.json'],
    options,
    args.fn
  );
};

/**
 * Return all the install shots for an artist
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.installShots = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artist', args.str, 'install_shots.json'],
    options,
    args.fn
  );
};

/**
 * Get all locations where the artist as worked
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.locations = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor'
  ]);

  return this.send(
    ['artist', args.str, 'locations.json'],
    options,
    args.fn
  );
};

/**
 * Retrieve all partner artist relationships for a partner
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.partnerArtists = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artist', args.str, 'partner_artists.json'],
    options,
    args.fn
  );
};

/**
 * Retrieve all partners who have artworks by an artist
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.partners = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artist', args.str, 'partners.json'],
    options,
    args.fn
  )
};

/**
 * Retrieve all artwork inquiry requests for an artist
 *
 * @param {String} str Artists name
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artist.prototype.inquiryRequests = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursors', 'sort'
  ]);

  return this.send(
    ['artist', args.str, 'artwork_inquiry_requests.json'],
    options,
    args.fn
  )
};

module.exports = Artist;
