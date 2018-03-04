(function () {
    const webpack = require("webpack");
    const path = require("path");
    const CleanWebpackPlugin = require("clean-webpack-plugin");
    const AssetsWebpackPlugin = require("assets-webpack-plugin");
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ExtractTextPlugin = require("extract-text-webpack-plugin");

    const ExtractLess = new ExtractTextPlugin({
        filename: "[name].css",
        disable: process.env.NODE_ENV === "development"
    });

    const config = {        
        entry: {
            main: ['./src/index.js', './styles/site.less']
        },
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js",
            path: path.join(__dirname, '/dist'),
            publicPath: "/dist/"
        },        
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
                },
                {
                    test: /\.html$/,
                    use: [
                      {
                        loader: "html-loader",
                        options: { minimize: true }
                      }
                    ]
                },
                {
                    test: /\.less$/,
                    use: ExtractLess.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }],
                        // use style-loader in development
                        fallback: "style-loader"
                    })
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin("dist/"),
            new AssetsWebpackPlugin({
                prettyPrint: true
            }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "../index.html"
            }),
            ExtractLess
        ]
    };

    module.exports = config;
    })();
