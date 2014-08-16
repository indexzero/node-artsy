
var Artsy = require('..');

var config = require('../dist/artsy-api');

var client = new Artsy({ token: config.xapp });

client.artists.list(function (err, output) {
  if (err) return console.error(err);
  console.dir(output);
});

// We might want to accept this with a space instead?
client.artists.get('andy-warhol', function (err, output) {
  if (err) return console.error(err);

  console.dir(output);
})
