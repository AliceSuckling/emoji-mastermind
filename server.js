const ENVIRONMENT = process.env.NODE_ENV || "dev";
const CONFIG = require("./webpack.config")(ENVIRONMENT);

const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const compiler = webpack(CONFIG);
const server = new webpackDevServer(compiler, CONFIG.server);

server.listen(8001);
