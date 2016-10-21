"use strict";

// Pure function - return new config object from base
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = function(base) {
  return Object.assign({}, base, {
    plugins: [
      new CleanWebpackPlugin(["dist"], {
        root: __dirname,
        verbose: true,
        dry: false,
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": "'production'",
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin(),
      ...base.plugins,
    ],
  });
};
