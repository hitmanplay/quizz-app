const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = (env) => {
    const config = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
              {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              { test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
              },
            ],
          },
          resolve: {
            extensions: ['.tsx', '.ts', '.js'],
          },
    }
    return config
}