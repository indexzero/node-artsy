var Artsy = require('..');

var xapp = process.env.XAPP,
    client = new Artsy({ token: xapp });

if (!xapp) {
  console.error('Missing XAPP token. Run XAPP="KEY" node examples/shows.js');
  return process.exit(1);
}

client.partner.shows('aca-galleries', function (err, output) {
  if (err) return console.error(err);

  console.dir(output);
});
