process.env.NODE_ENV = 'production'
const path = require("path")
const webpack = require("webpack")
const webpackOptions = require("./webpack.config")

webpack(webpackOptions)


