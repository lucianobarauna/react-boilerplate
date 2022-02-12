const path = require('path')
const commonConfig = require("./app.common");
const Dotenv = require('dotenv-webpack');

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const configMiniCssExtractPlugin = { loader: MiniCssExtractPlugin.loader };

const configCssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      auto: true,
      localIdentName: 'app__[hash:base64:5]'
    },
    importLoaders: 2,
  }
}
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


const prodConfig = {
  mode: "production",
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
  },
  devtool: "hidden-source-map",
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
      path: path.resolve(__dirname, '../.env'),
      // path: './.env',
      safe: true,
      allowEmptyValues: true,
      systemvars: true
    })
  ]
};

module.exports = Object.assign(commonConfig, prodConfig);
