(function () {
    "use strict";
    const webpack = require("webpack");    
    const path = require("path"); 

    const CleanWebpackPlugin = require("clean-webpack-plugin");
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ExtractTextPlugin = require("extract-text-webpack-plugin");

    const config = {               
        entry: {
            main: ['./src/index.js'
                , './styles/site.less'
            ]
        },
        output: {
            filename: "[name]-[chunkhash].js", 
            chunkFilename: "[name]-[chunkhash].js",           
            path: path.join(__dirname, '/dist'),
            publicPath: "/dist/"
        },       
        mode: 'production',  
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
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }],
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader"                       
                        }],
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.(png|jpg|gif|swf)$/,
                    use: [{
                        loader: "file-loader"
                    }]
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                    use: [{
                        loader: "file-loader"
                    }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin("dist/"),           
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "../index.html"
            }),
            new ExtractTextPlugin({
                filename: "[name]-[chunkhash].css"       
            })
        ]
    };

    module.exports = config;
})();
