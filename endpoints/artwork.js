
/**
 * Artwork endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Artwork (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

/**
 * Get a piece of artwork by ID
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.get = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artwork', args.str],
    options,
    args.fn
  );
};

/**
 * Update a piece of artwork by ID
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.put =
Artwork.prototype.update = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['artwork', args.str],
    this.api.merge(options, {
      method: 'PUT'
    }),
    args.fn
  );
};

/**
 * Create an artwork
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.create = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['artwork.json'],
    this.api.merge(options, {
      method: 'POST'
    }),
    args.fn
  );
};

/**
 * Delete a piece of artwork by ID
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.del =
Artwork.prototype.delete = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['argwork', args.str],
    this.api.merge(options, {
      method: 'DELETE'
    }),
    args.fn
  );
};

/**
 * Return inquiry request for a particular artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.inquiryRequests = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artwork', args.str, 'artwork_inquiry_requests.json'],
    options,
    args.fn
  );
};

/**
 * Get comparable artworks to the one given
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.comparableSales = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artwork', args.str, 'comparable_sales.json'],
    options,
    args.fn
  );
};

/**
 * Get edition sets of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.editionSets = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor'
  ]);

  return this.send(
    ['artwork', args.str, 'edition_sets.json'],
    options,
    args.fn
  );
};

/**
 * Return the flags of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.flags = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor'
  ]);

  return this.send(
    ['artwork', args.str, 'flags.json'],
    options,
    args.fn
  );
};

/**
 * Return the genome of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.genome = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artwork', args.str, 'genome.json'],
    options,
    args.fn
  );
};

/**
 * Return the genome map of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.genomeMap = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artwork', args.str, 'genome', 'map.json'],
    options,
    args.fn
  );
};

/**
 * Return the genes of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.genes = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor'
  ]);

  return this.send(
    ['artwork', args.str, 'genome', 'genes.json'],
    options,
    args.fn
  );
};

/**
 * Return the images of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.images = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artwork', args.str, 'images.json'],
    options,
    args.fn
  );
};

/**
 * Return the install shots of the artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.installShots = function (args) {
  args = this.api.args(arguments);

  var options = this.options(args.options, [
    'offset', 'cursor', 'sort'
  ]);

  return this.send(
    ['artwork', args.str, 'install_shots.json'],
    options,
    args.fn
  );
};

/**
 * Return the inventory availability of an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.inventory = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['artwork', args.str, 'inventory.json'],
    options,
    args.fn
  );
};

/**
 * Return the artwork that is canonical for another artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.canonicalArtwork = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['artwork', args.str, 'canonical_artwork.json'],
    options,
    args.fn
  );
};

/**
 * Return the artworks that are duplicate to an artwork
 *
 * @param {String} str artwork id
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Artwork.prototype.duplicateArtwork = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};

  return this.send(
    ['artwork', args.str, 'duplicate_artworks.json'],
    options,
    args.fn
  );
};
