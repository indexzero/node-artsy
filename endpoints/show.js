

function Show (api) {
  this.send = api.send.bind(api);
  this.options = api.options;
  this.api = api;
}

Show.prototype.get = function (args) {
  args = this.api.args(arguments);

  var options = args.options || {};
  return this.send(
    ['show', args.str],
    options,
    args.fn
  );
};

module.exports = Show
