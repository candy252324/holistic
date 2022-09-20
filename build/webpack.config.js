const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader")

const getConfigOptions = require("./utils").getConfigOptions


module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(process.cwd(), "src/index.js"),
  output: {
    filename: "[name]-[hash].js", // 输出文件名称
    path: path.resolve(process.cwd(), "dist"),
    clean: true  // 每次构建前清理 /dist 文件夹
  },
  plugins: [
    new webpack.DefinePlugin({ ENVConfig: getConfigOptions() }),
    new VueLoaderPlugin(), // 配合 vue-loader 使用
    new HtmlWebpackPlugin({
      title: '系统设置',
      filename: "index.html",
      template: path.resolve(process.cwd(), "index.html"),     // 模板
      inject: "body",  // script 标签插入到 html中的位置，head/body/false, 默认为插入body
      minify: {
        removeComments: false,     // 删除 html 中的注释
        collapseWhitespace: false,   // 删除 html 中空格
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',  // `type: 'asset'` 在导出一个 data URI 和发送一个单独的文件之间自动选择
      },
      {
        test: /\.vue$/i,
        use: ["vue-loader"]
      },
      {
        test: /\.ts$/i,
        use: ["ts-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@assets": path.resolve(__dirname, "../assets"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
  }
}