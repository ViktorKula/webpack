const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');



module.exports = {
  entry: './src/new.ts',
  mode: "development",
  devtool: 'inline-source-map',

  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    port: 8080,

  },
  output: {
    filename: 'super.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html"
    }),
    new ESLintPlugin({
      // Опции плагина ESLint
      // Например, вы можете указать правила ESLint, игнорируемые файлы и т.д.
    }),
    new StylelintPlugin(),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ],
  },
  module: {
    rules: [
      {
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true,
          }
        }, 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
