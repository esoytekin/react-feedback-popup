var path = require("path");
var _ = require("lodash");
var commonConfig = require("./webpack.common.config");

var config = _.assign(commonConfig, {
    devtool: "source-map",
    entry: [
        "./src/style/font/fonts/bootstrap-icons.woff",
        "./src/style/font/fonts/bootstrap-icons.woff2",
    ],
    output: {
        path: path.join(__dirname, "lib"),
    },
});

module.exports = config;
