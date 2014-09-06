
var Artsy = require('..');

var config = require('../dist/artsy-api');

var client = new Artsy({ token: config.xapp });

// We might want to accept this with a space instead?
client.artist.get('andy-warhol', function (err, output) {
  if (err) return console.error(err);

  console.dir(output);
})
