var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros');

vows.describe('artsy/show').addBatch({
  'Using node-artsy': {
    'show.get': macros.call('aca-galleries-luis-jimenez', {
      'should return a show': function (show) {
        assert.isObject(show);
        //
        // TODO (indexzero): More asserts.
        //
      }
    }),
    'with partner and show': {
      'show.get': macros.call({
        partner: 'aca-galleries',
        show: 'aca-galleries-luis-jimenez'
      }, {
        'should return a show': function (show) {
          assert.isObject(show);
          //
          // TODO (indexzero): More asserts.
          //
        }
      }),
      'show.artworks': macros.call({
        partner: 'aca-galleries',
        show: 'aca-galleries-luis-jimenez'
      }, {
        'should return artworks from the show': function (artworks) {
          assert.isArray(artworks);
          //
          // TODO (indexzero): More asserts.
          //
        }
      })
    },
    'show.images': macros.call('aca-galleries-aca-galleries-at-miami-project-2014', {
      'should return images from the show': function (images) {
        assert.isArray(images);
        //
        // TODO (indexzero): More asserts.
        //
      }
    })
  }
}).export(module);
