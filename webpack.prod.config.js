var path = require("path");
var _ = require("lodash");
var commonConfig = require("./webpack.common.config");

var config = _.assign(commonConfig, {
    devtool: "source-map",
    mode: "'production",
    entry: ["./src/index.tsx"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "react-feedback-popup.js",
        publicPath: "/static/",
    },
});

module.exports = config;
