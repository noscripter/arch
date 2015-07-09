(function(){
  var path, rc;
  path = require('path');
  rc = require('rc');
  module.exports = rc('arch', {
    bundle: true,
    debug: false,
    environment: process.env.NODE_ENV || 'development',
    minify: process.env.NODE_ENV === 'production',
    paths: {
      app: {
        abs: path.resolve('.'),
        rel: path.relative(__dirname, path.resolve('.'))
      },
      arch: {
        abs: path.dirname(require.resolve("../package.json")),
        rel: path.relative(path.resolve('.'), path.dirname(require.resolve("../package.json")))
      },
      'public': 'dist'
    },
    port: 3000,
    watch: process.env.NODE_ENV !== 'production'
  });
}).call(this);