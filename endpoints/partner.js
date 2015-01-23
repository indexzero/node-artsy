'use strict';

var warn = require('diagnostics')('artsy:api:partner');

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
 * All available options for querying artists for a partner.
 *
 * @type {Array}
 * @private
 */
Partner.artists = [
  'artist_id',
  'published',
  'sort'
];

/**
 * Get all artists for the partner user.
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Partner.prototype.artists = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {},
      partner = args.str || options.partner;

  return this.send(
    ['partner', partner, 'artists.json'],
    this.api.options(options, Partner.artists),
    args.fn
  );
};

/**
 * All available options for querying "partner artists"
 * for a partner.
 *
 * n.b. see the distinction in the data types below.
 *
 * @type {Array}
 * @private
 */
Partner.partnerArtists = [
  'artist_id',
  'published',
  'sort'
];


/**
 * Get all "partner artists" for the partner user.
 *
 * The distinction here is that the cover photo for
 * the artist can be configured by the Partner in the
 * CMS, whereas the normal artists are the global cover
 * photos configured by Artsy only.
 *
 * @param {Object} options Optional options.
 * @param {function} fn The callback.
 * @returns {Assign}
 * @api public
 */
Partner.prototype.partnerArtists = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {},
      partner = args.str || options.partner;

  return this.send(
    ['partner', partner, 'partner_artists.json'],
    this.api.options(options, Partner.artists),
    function (err, pArtists) {
      if (err) { return args.fn(err); }

      //
      // If the partner specific `image_*` properties are not
      // available then fall back to the global ones. If those do
      // not exist then do not include this artist.
      //
      pArtists = pArtists.map(function (pArtist) {
        if (!pArtist.image_urls || !pArtist.image_versions) {
          warn('Fall back: no image_urls or image_versions', pArtist.sortable_id);

          if (!pArtist.artist || !pArtist.artist.image_urls) {
            warn('Fall back failure: no artist.image_urls %s', pArtist.sortable_id);
            return null;
          }

          pArtist.image_urls = pArtist.artist.image_urls;
          pArtist.image_versions = pArtist.artist.image_versions;
          pArtist.image_url = pArtist.artist.image_url;
        }

        return pArtist;
      }).filter(Boolean);

      args.fn(null, pArtists);
    }
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
  'published',
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

  var options = args.options || {},
      partner = args.str || options.partner;

  return this.send(
    ['partner', partner, 'artworks.json'],
    this.api.options(options, Partner.artworks),
    args.fn
  );
};

module.exports = Partner;
