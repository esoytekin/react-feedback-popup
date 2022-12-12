var path = require("path");
var _ = require("lodash");
var commonConfig = require("./webpack.common.config");

var config = _.assign(commonConfig, {
    devtool: "source-map",
    entry: ["./src/index.tsx"],

    externals: {
        react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
        },
    },

    output: {
        path: path.join(__dirname, "lib"),
        filename: "react-feedback-popup.js",
        library: "react-feedback-popup",
        libraryTarget: "umd",
    },
});

module.exports = config;
