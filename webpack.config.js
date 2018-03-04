(function () {
    const webpack = require("webpack");
    const path = require("path");
    const CleanWebpackPlugin = require("clean-webpack-plugin");
    const AssetsWebpackPlugin = require("assets-webpack-plugin");

    const config = {        
        entry: {
            main: './scripts/app.js'
        },
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js",
            path: path.join(__dirname, '/scripts/dist'),
            publicPath: "/scripts/dist/"
        },
        devtool: 'source-map',
        resolve: {
            extensions: [".webpack.js", ".web.js", ".js", ".map"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }],
                    exclude: /(node_modules)/
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin("scripts/dist/"),
            new AssetsWebpackPlugin({
                prettyPrint: true
            })
        ]
    };

    module.exports = config;
    })();
