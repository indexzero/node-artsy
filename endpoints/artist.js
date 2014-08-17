
/**
 * Artist endpoint
 *
 * @param {Mana} api Actual mana api instance
 * @api private
 */
function Artist (api) {
  this.send = api.send.bind(api);
  this.qs = api.querystring;
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

  var options = args.options || {};
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

  var options = args.options || {};
  return this.send(
    ['artist', args.str, 'artworks', 'all.json'],
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

  var options = args.options || {};
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

  var options = args.options || {};
  return this.send(
    ['artist', args.str, 'follow', 'users.json'],
    options,
    args.fn
  );
};

module.exports = Artist;
