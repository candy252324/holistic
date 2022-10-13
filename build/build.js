process.env.NODE_ENV = 'production'
const webpack = require("webpack")
const webpackOptions = require("./webpack.config")

webpack(webpackOptions)


