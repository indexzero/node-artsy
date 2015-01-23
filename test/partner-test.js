var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros'),
    debug = require('diagnostics')('artsy:test:partner');

vows.describe('artsy/partner').addBatch({
  'Using node-artsy': {
    'partner.shows': macros.call('aca-galleries', {
      'should return a list of shows': function (shows) {
        assert.isArray(shows);
        //
        // TODO (indexzero): More asserts.
        //
        debug('partner.shows', shows);
      }
    }),
    'partner.artists': macros.call('aca-galleries', {
      'should return a list of artists': function (artists) {
        assert.isArray(artists);
        //
        // TODO (indexzero): More asserts.
        //
        debug('partner.artists', artists);
      }
    }),
    'partner.partnerArtists': macros.call('aca-galleries', {
      'should return a list of "partner artists"': function (pArtists) {
        assert.isArray(pArtists);
        pArtists.forEach(function (pArtist) {
          assert.isObject(pArtist.artist);
          assert.isObject(pArtist.partner);
          assert.isArray(pArtist.image_versions);
          assert.isObject(pArtist.image_urls);
        });
        //
        // TODO (indexzero): More asserts.
        //
        debug('partner.partnerArtists', pArtists);
      }
    })
  }
}).export(module);
