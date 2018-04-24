//const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config.js");

module.exports = merge(base, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000,
        watchOptions: {
            aggregateTimeout: 100,
            ignored: /node_modules/
        }
    }
});
