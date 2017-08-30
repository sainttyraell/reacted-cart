var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');

const extractSass = new ExtractTextWebpackPlugin({
    filename: "[name].[contenthash].css"
});

loaders.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
    exclude: ['node_modules']
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/main.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        extractSass,
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextWebpackPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
        template: './src/index.html',
        files: {
                css: ['style.css'],
                js: [ "bundle.js"],
            }
        }),
        
    ],
    devServer: {
        host: 'localhost',
        port: 8888,
        historyApiFallback: true,
        hot: true,
    },
}