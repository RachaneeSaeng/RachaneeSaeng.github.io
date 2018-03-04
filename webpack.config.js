var webpack = require('webpack')
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
    entry: getEntry(),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'dist/bundle.js'
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                include: /styles/,
                loaders: [
                    'style',
                    'css',
                    'less'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015',                  
                    'ts-loader'
                ]
            },
            {
                test: /\.js?$/,
                exclude: [
  /(node_modules)/,
  'service-worker.js',
],
                loaders: [
                    'babel?presets[]=es2015'
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    plugins: prod ? [] :
    [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

function getEntry() {
  var entry = [];

  if (!prod) { //only want hot reloading when in dev.
        console.log('add hot loading');
        entry.push('webpack-dev-server/client?http://localhost:8080');
        entry.push('webpack/hot/only-dev-server');
  }

 entry.push('./app/index.tsx');  
 entry.push('./scripts/app.js');
 entry.push('./styles/css.less');  
 return entry;
};

