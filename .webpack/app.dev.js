const path = require('path')
const commonConfig = require("./app.common");
const Dotenv = require('dotenv-webpack');

const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const configMiniCssExtractPlugin = { loader: MiniCssExtractPlugin.loader };

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

const configCssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      auto: true,
      localIdentName: '[name]__[local]_[hash:base64:5]'
    },
    importLoaders: 2,
  }
}


const devConfig = {
  mode: "development",
  devServer: {
    port: 9007
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.module\.(s[c|a]ss)$/,
        use: [
          configMiniCssExtractPlugin,
          configCssModuleLoader,
          configPostCssLoader,
          configSassLoader
        ]
      },

    ]
  },
  plugins: [
    ...commonConfig.plugins,
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development.local'),
      safe: true,
      allowEmptyValues: true,
      systemvars: true
    })
  ]
};

module.exports = Object.assign(commonConfig, devConfig);
