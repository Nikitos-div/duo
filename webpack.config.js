const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/client/index.tsx', // точка входа, о которой говорилось ранее.
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'ts-loader'
                    },
                  ],
              },
              // {
              //   test: /\.s[ac]ss$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
              //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
              //  },
               
              {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
        ],
    },
    resolve: {
      extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
    output: {
        filename: 'bundle.js', // выходной бандл
    },
    devServer: {
      // contentBase
      static : {
        directory : path.join(__dirname, "public/")
      },
      port: 3000,
      // publicPath
    //   devMiddleware:{
    //      publicPath: "https://localhost:3000/dist/",
    //   },
      // hotOnly
      hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            title: 'Duo',
            template: './public/index.html',
        }
    )],

    // devtool: 'eval-source-map', // создает высококачественные карты кода
}