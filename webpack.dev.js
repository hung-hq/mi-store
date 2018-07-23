const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: BUILD_DIR,
        hot: true,
        proxy:{
            "/":"http://localhost:8080"
        },
        // setting publicPath for live reloading
        publicPath: '/dist/',
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});