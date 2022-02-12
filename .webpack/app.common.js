const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const configMiniCssExtractPlugin = { loader: MiniCssExtractPlugin.loader };
const configCssLoader = {  loader: "css-loader", options: { sourceMap: true  }};

const configPostCssLoader = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        autoprefixer
      ],
    },
  }
}

const configSassLoader = { loader: "sass-loader", options: { sourceMap: true } };


module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../app-build"),
    clean: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|s[c|a]ss)$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          configMiniCssExtractPlugin,
          configCssLoader,
          configPostCssLoader,
          configSassLoader
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ]
};
