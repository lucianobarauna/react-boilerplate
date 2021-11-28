const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 9007
  },
  devtool: "eval-source-map"
};

module.exports = Object.assign(commonConfig, devConfig);
