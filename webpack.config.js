const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src', 'index.tsx')
    ],
    devServer: {
        contentBase: './dist',
        hotOnly: true
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: ['react-hot-loader/webpack', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html', inject: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};