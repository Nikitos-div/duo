const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: "development",
  target: 'browserslist',
  entry: "./src/client/index.tsx", 
  output: {
    path:path.resolve(__dirname, "dist"), 
    filename: "build.js", 
    publicPath: "./",    
    clean: true,  
  },
  module: {
    rules: [
        { test: /\.(html)$/, use: ['html-loader']}, 
        {
            test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
        }, 
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            
        },
        {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
//   devtool: "source-map", 
//   target: "web", 
 
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html', 
        
    }),
    new ReactRefreshWebpackPlugin() // that stuff for dev (TODO)
  ],

}