const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  entry: './src/js/controller.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      //Parsing Styles
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      //Parsing Images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [ 
          { 
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' },
          },
        ]
      },
      //Parsing SVG's Icons
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}