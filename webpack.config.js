const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    app: "./app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015", "react"] }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "index.js"
  },
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    publicPath: "/",
    contentBase: "./public",
    hot: true
  }
};
