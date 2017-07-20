/**
 * Created by 우리집 on 2017-07-17.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};