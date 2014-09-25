var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros');

vows.describe('artsy/partner').addBatch({
  'Using node-artsy': {
    'partner.shows': macros.call('aca-galleries', {
      'should return a list of shows': function (shows) {
        assert.isArray(shows);
        //
        // TODO (indexzero): More asserts.
        //
      }
    })
  }
}).export(module);