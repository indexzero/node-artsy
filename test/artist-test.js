var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros'),
    debug = require('diagnostics')('artsy:test:artwork');

vows.describe('artsy/artist').addBatch({
  'Using node-artsy': {
    'artist.get': macros.call('faith-ringgold', {
      'should return an artist': function (artist) {
        assert.isObject(artist);
        assert.equal(artist.id, 'faith-ringgold');
        //
        // TODO (indexzero): More asserts.
        //
        debug('artist.get', artist);
      }
    }),
    'artist.artwork': macros.call('faith-ringgold', {
      'should return a list of artworks': function (artworks) {
        assert.isArray(artworks);
        //
        // TODO (indexzero): More asserts.
        //
        debug('artist.artworks', artworks);
      }
    })
    //
    // Remark (indexzero): these seem only accessible to Artsy admins
    //
    // 'artist.artworkAll': macros.call('faith-ringgold', {
    //   'should return a list of artworks': function (artworks) {
    //     console.dir(artworks);
    //   }
    // })
  }
}).export(module);
