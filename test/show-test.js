var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros');

vows.describe('artsy/show').addBatch({
  'Using node-artsy': {
    'show.get': macros.call('aca-galleries-luis-jimenez', {
      'should return a shows': function (show) {
        assert.isObject(show);
        //
        // TODO (indexzero): More asserts.
        //
      }
    }),
    'show.images': macros.call('aca-galleries-aca-galleries-at-miami-project-2014', {
      'should return a shows': function (images) {
        assert.isArray(images);
        //
        // TODO (indexzero): More asserts.
        //
      }
    })
  }
}).export(module);
