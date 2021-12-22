const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

//todo: understand why terser is messing with source-map
//continue on webpack files for production and development
//find if there is a plugin to optmize images

module.exports = {
  mode: 'development',
  
  entry: {
    index: './src/index.js',   
  },
  
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    watchFiles: ['./src/**/*'],
  },
  
  optimization: {
    minimizer: [   
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    minimize: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  module: {
    rules: [      
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,         
          "css-loader",          
          "sass-loader",
        ],
      }  
    ]
  }
}