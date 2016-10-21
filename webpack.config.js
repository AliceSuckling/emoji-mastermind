"use strict";

/**
 * Webpack configuration file, generate base configuration
 * then load any environment specific items
 */

const webpack = require("webpack");
const args = require("minimist")(process.argv.slice(2));
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BASE_CONFIG = {
  entry: [
    // Include any polyfills as an entry point first
    "babel-polyfill",
    "isomorphic-fetch",
    "./src/index.js",
  ],
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["eslint-loader"],
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel-loader",
        ],
      },
      {
        test: /\.json$/,
        loaders: [
          "json",
        ],
      },
      {
        "test": /\.styl$/,
        "exclude": /node_modules/,
        "loaders": [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader?dist=",  // Fix for stylus-loader @ node v6+
        ],
      },
      {
        "test": /\.css$/,
        "loaders": [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          "url-loader?limit=1000",
          "img-loader?minimize",
        ],
      },
      {
        test: /\.(ico)$/i,
        exclude: /node_modules/,
        loaders: [
          "file-loader?name=[path][name].[ext]?[hash]",
        ],
      },
    ],
  },
  stylus: {
    "include css": true,
  },
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false,
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2,
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false },
      ],
    },
  },
  postcss: function() {
    return [require("autoprefixer")];
  },
  resolve: {
    root: [
      __dirname + "/src/",
    ],
    extensions: ["", ".js", ".styl", ".json"],
  },
  // Details to pass onto webpack-dev-server
  server: {
    stats: {
      colors: true,
    },
    publicPath: "/",
    historyApiFallback: true,
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: "mastermind",
      template: "index.ejs",
      inject: "body",
      hash: true,
      cache: true,
    }),
  ],
};

const build = function(environment) {
  const fs = require("fs");
  const configFile = __dirname + "/webpack." + environment + ".config.js";
  let config = Object.assign({}, BASE_CONFIG);
  if (fs.existsSync(configFile)) {
    config = require(configFile)(config);
  }

  return config;
};

module.exports = "env" in args ? build(args.env) : build;

