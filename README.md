node-artsy
==========

A Node.js client for the Artsy API

## Install

```sh
$ npm install artsy --save
```

## Usage
```js
var Artsy = require('artsy');

// We need something reasonable for using xapp/access tokens
// but we are going to assume xapp for now.
var client = new Artsy({
  token: '89438sdfgsdfga*&^*='
});

```

### Resources to be implemented

* `/api/v1/artist/`


### Notes

Artist ID for "First Last" is `first-last`
