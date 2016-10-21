"use strict";

const webpack = require("webpack");
const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin");

// Pure function - return new config object from base
module.exports = function(base) {
  return Object.assign({}, base, {
    output: Object.assign({}, base.output, {
      path: __dirname,
    }),
    // Add webpack hot loading
    module: Object.assign({}, base.module, {
      loaders: base.module.loaders.map(loader => {
        if (loader.loaders.find(name => name === "babel-loader")) {
          return Object.assign({}, loader, {
            loaders: ["react-hot", ...loader.loaders],
          });
        }

        return loader;
      }),
    }),
    entry: [
      "webpack-dev-server/client?http://0.0.0.0:8001",
      "webpack/hot/only-dev-server",
      ...base.entry,
    ],
    server: Object.assign({}, base.server, {
      hot: true,
    }),
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": "'development'",
      }),
      new FlowStatusWebpackPlugin(),
      ...base.plugins,
    ],
    // Add source maps
    devtool: "inline-source-map",
  });
};
