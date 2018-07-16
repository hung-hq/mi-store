const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/build');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: BUILD_DIR,
        port: 3000,
        hot: true,
        publicPath: '/',
        proxy:{
            "/":"http://localhost:8080"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});