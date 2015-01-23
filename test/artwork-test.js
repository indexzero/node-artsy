var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros'),
    debug = require('diagnostics')('artsy:test:artwork');

vows.describe('artsy/artwork').addBatch({
  'Using node-artsy': {
    'artwork.get': macros.call('faith-ringgold-committee-to-defend-the-black-panthers', {
      'should return an artwork': function (artwork) {
        assert.isObject(artwork);
        assert.equal(artwork.id, 'faith-ringgold-committee-to-defend-the-black-panthers');
        //
        // TODO (indexzero): More asserts.
        //
        debug('artwork.get', artwork);
      }
    })
  }
}).export(module);
