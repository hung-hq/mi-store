var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/main/resources/static');
var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/build');

module.exports = {
    entry: APP_DIR + '/js/src/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                // exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=env'],
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    }
};