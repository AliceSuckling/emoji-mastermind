// Pure function - return new config object from base
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin");

module.exports = function(base) {
  return Object.assign({}, base, {
    // Add source maps
    devtool: "inline-source-map",
    resolve: Object.assign({}, base.resolve, {
      root: [
        ...base.resolve.root,
        __dirname + "/stories/",
      ],
    }),
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": "'testing'",
      }),
      new FlowStatusWebpackPlugin(),
      ...base.plugins.filter(p => !(p instanceof HtmlWebpackPlugin)),
    ],
  });
};
