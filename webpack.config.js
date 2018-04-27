const HtmlWebPackPlugin = require('html-webpack-plugin');

let config = {
    entry: [
        './index.js',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;
