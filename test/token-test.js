var vows = require('vows'),
    assert = require('./assert'),
    Artsy = require('../'),
    macros = require('./macros'),
    debug = require('diagnostics')('artsy:test:tokens');

vows.describe('artsy/tokens').addBatch({
  'Using node-artsy': {
    '// token.oauth': function () {
      // @TODO: Complete this test.
    },
    '// token.xapp': function () {
      // @TODO: Complete this test.
    }
  }
}).export(module);
