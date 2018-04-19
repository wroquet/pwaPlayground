const webpack = require('webpack');
const path = require('path');

let config = {
    entry: [
        './index.js',
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        crossOriginLoading: 'anonymous'
    },
    plugins: [
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // file where content is served
        historyApiFallback: true, // fallback to index.html
        inline: true, // display messages in devtools
        open: true, // open default nav
        hot: true // hot module reload
    },
    devtool: 'eval-source-map'
};

module.exports = config;
