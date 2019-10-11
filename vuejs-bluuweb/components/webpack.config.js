const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'})
    ]
}