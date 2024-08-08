const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.config");

const prodConfig = {
  mode: "production",
    devServer: {
    hot: false,
    port: 3031,
  },
};

module.exports = merge(commonConfig,prodConfig);
