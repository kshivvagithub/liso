const path = require('path'),
  fs = require('fs'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

/*let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return [ '.bin' ].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[ mod ] = 'commonjs ' + mod;
  });*/


module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'app.js',
    path: `${path.resolve(process.cwd())}/build/static/js`,
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
            /*['es2015', { loose: true, modules: false }],*/
            'es2016', 'es2017', 'react'
          ],
          plugins: [ 'transform-es2015-modules-commonjs' ],
        }
      }
    ]
  },
  /*plugins: [ new HtmlWebpackPlugin({
    title: 'ISO',
    filename: '../views/index.html',
    template: './src/app/view/index.html',
  }) ],*/
  target: 'web',
};