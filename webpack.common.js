const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/main/resources/static/webapp');
const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/dist');

module.exports = {
    entry: {
        app: APP_DIR + '/src/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        // setting publicPath for live reloading
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['ts', '.tsx', '.js', '.jsx']
    }
};