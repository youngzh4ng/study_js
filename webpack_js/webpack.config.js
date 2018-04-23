const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConsoleLogOnBuildWebpackPlugin = require('./plugins/ConsoleLogOnBuildWebpackPlugin');


const resolve = dir => {
    return path.resolve(__dirname, dir);
};

const config = {
    mode: 'development',
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin({test: 1})
    ],
    entry: {
        app: './src/test.js',
        vendor: './node_modules/lodash/lodash.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/, use: 'babel-loader'
        }, {
            test: /\.txt$/, use: 'raw-loader'
        }, {
            test: /\.css$/, use: 'css-loader'
        }]
    }
};

module.exports = config;