(function () {
    const webpack = require("webpack");
    const path = require("path"); 
    const HtmlWebPackPlugin = require("html-webpack-plugin");
   
    const config = {        
        entry: {
            main: ['./src/index.js'
                , './styles/site.less'
            ]
        },
        output: {
            filename: "[name].js", 
            chunkFilename: "[name].js",           
            path: path.join(__dirname, '/dist'),
            publicPath: "/dist/"
        },     
        mode: 'development',
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
                },
                {
                    test: /\.html$/,
                    use: [
                      {
                        loader: "html-loader"
                      }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader", options: {
                            sourceMap: true
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }]
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
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "../index.html"
            })
        ]
    };

    module.exports = config;
    })();
