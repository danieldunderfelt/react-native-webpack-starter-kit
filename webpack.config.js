var path = require('path');
var webpack = require('webpack');

var config = {
    debug: true,
    devtool: 'eval',
    entry: {
        'index.ios': [
            'react-native-webpack-server/hot/entry',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:8082',
            './src/main.ios.js'
        ],
        'index.android': [
            'react-native-webpack-server/hot/entry',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:8082',
            './src/main.android.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: 'http://localhost:8082/'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                stage: 0,
                optional: ['runtime'],
                plugins: ['react-transform'],
                extra: {
                    "react-transform": [{
                        target: 'react-transform-hmr',
                        imports: ['react-native'],
                        locals: ['module']
                    }]
                }
            }
        }]
    },
    resolve: {extensions: ['', '.js', '.jsx', '.es6']},
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config