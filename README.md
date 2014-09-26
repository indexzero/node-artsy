node-artsy
==========

A Node.js client for the Artsy private API, also known as APIv1. Artsy now has a public API, also known as APIv2, see [developers.artsy.net](https://developers.artsy.net) for more information.

## Install

```sh
$ npm install artsy --save
```

## Usage

```js
var Artsy = require('artsy');

//
// You need to generate your own XAPP token for now
// using `bin/xapp`.
//
var client = new Artsy({ token: '89438sdfgsdfga*&^*=' });

client.artists.get('jackson-pollock', function (err, artist) {
  console.dir(artist); // Abstract expressionism ftw
});
```

## Generating an XAPP token

The authentication API for the `Artsy` client is not very robust yet. You need to get your own XAPP token first.

**Write `dist/credentials.json`**
```js
{
  "id": "your-artsy-id",
  "secret": "your-artsy-secret"
}
```

Then run `artsy-xapp`

```
npm install -g artsy
artsy-xapp ./path/to/auth.json
```

### Resources currently implemented

#### Artist

```
GET    /api/v1/artist/{artist_id}
PUT    /api/v1/artist/{artist_id}
POST   /api/v1/artist/{artist_id}
DELETE /api/v1/artist/{artist_id}
GET    /api/v1/artist/{artist_id}/artworks.json
GET    /api/v1/artist/{artist_id}/artworks/all.json
GET    /api/v1/artist/{artist_id}/auction_lots.json
GET    /api/v1/artist/{artist_id}/genome.json
GET    /api/v1/artist/{artist_id}/genome/map.json
GET    /api/v1/artist/{artist_id}/genome/genes.json
GET    /api/v1/artist/{artist_id}/follow/users.json
GET    /api/v1/artist/{artist_id}/install_shots.json
GET    /api/v1/artist/{artist_id}/locations.json
GET    /api/v1/artist/{artist_id}/partner_artists.json
GET    /api/v1/artist/{artist_id}/partners.json
GET    /api/v1/artist/{artist_id}/inquiry_requests.json
```

#### Artwork

```
GET    /api/v1/artwork/{artwork_id}
PUT    /api/v1/artwork/{artwork_id}
POST   /api/v1/artwork/{artwork_id}
DELETE /api/v1/artwork/{artwork_id}
GET    /api/v1/artwork/{artwork_id}/artwork_inquiry_requests.json
GET    /api/v1/artwork/{artwork_id}/comparable_sales.json
GET    /api/v1/artwork/{artwork_id}/canonical_artwork.json
GET    /api/v1/artwork/{artwork_id}/duplicate_artwork.json
GET    /api/v1/artwork/{artwork_id}/edition_sets.json
GET    /api/v1/artwork/{artwork_id}/flags.json
GET    /api/v1/artwork/{artwork_id}/genome.json
GET    /api/v1/artwork/{artwork_id}/genome/map.json
GET    /api/v1/artwork/{artwork_id}/genome/genes.json
GET    /api/v1/artwork/{artwork_id}/images.json
GET    /api/v1/artwork/{artwork_id}/install_shots.json
GET    /api/v1/artwork/{artwork_id}/inventory.json
```

#### Partner

```
GET  /api/v1/partners/{partner_id}/shows.json
GET  /api/v1/partners/{partner_id}/artworks.json
GET  /api/v1/partners/{partner_id}/artworks.json?artist_id={artist_id}
GET  /api/v1/partners/{partner_id}/artworks.json?&without_artist=true/false
```

##### Authors: [Charlie Robbins](https://github.com/indexzero), [Jarrett Cruger](https://github.com/jcrugzz)
##### License: Apache2
