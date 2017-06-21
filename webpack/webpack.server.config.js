const path = require('path'),
  fs = require('fs');

/*let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return [ '.bin' ].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[ mod ] = 'commonjs ' + mod;
  });*/

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    path: `${path.resolve(process.cwd())}/build/server`,
    libraryTarget: 'commonjs',
  },
  externals: [
    /^(?!\.|\/).+/i,
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_module)/,
        query: {
          presets: [
            'latest-minimal', 'react'
          ],
        }
      }
    ]
  },
  target: 'node',
};