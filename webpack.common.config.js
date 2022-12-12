var path = require("path");
var webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".webpack.js", ".web.js", ".js", ".css"],
    },
    module: {
        rules: [
            {
                test: [/\.ts$/, /\.tsx$/],
                loaders: ["ts-loader"],
            },
            {
                test: [/\.less$/],
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: [/\.css$/],
                loader: "style-loader!css-loader",
            },
            {
                test: /\.pegjs$/,
                loader: "pegjs-loader",
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts",
                },
            },
        ],
    },
};
