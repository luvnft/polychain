const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src','index.ts'),
    devServer: {
        contentBase : './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions : ['.ts','.tsx','.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Polychain'})
    ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
};