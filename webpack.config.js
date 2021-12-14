const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html',
    })]
};