const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./source/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/preset-react"]
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.join(__dirname, "source/settings.scss")
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.join(__dirname, "source"),
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};