const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        
            {
                test: /\.css$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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

    devtool: 'eval-source-map', // создает высококачественные карты кода
}