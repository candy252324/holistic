const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require("vue-loader")
const ThemeColorReplacer = require('webpack-theme-color-replacer')

const getConfigOptions = require("./utils").getConfigOptions


module.exports = {
  mode: process.env.NODE_ENV,
  devtool: "eval-cheap-source-map",
  entry: path.resolve(process.cwd(), "src/index.js"),
  output: {
    filename: "[name].js", // 主入口 js 文件名称
    chunkFilename: "static/js/[name]-[id].js",  // 异步加载的模块名称
    path: path.resolve(process.cwd(), "dist"),
    clean: true  // 每次构建前清理 /dist 文件夹
  },
  plugins: [
    // new ThemeColorReplacer({
    //   // 用于提取css文件的颜色数组，支持rgb和hsl。
    //   matchColors: ['red', 'green'],
    //   fileName: 'static/css/theme-colors-[contenthash:8].css', //optional. output css file name, suport [contenthash] and [hash].
    //   // resolveCss(resultCss) { // optional. Resolve result css code as you wish.
    //   //     return resultCss.replace(/#ccc/g, '#eee')
    //   // },
    //   // externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'], // optional, String or string array. Set external css files (such as cdn css) to extract colors.
    //   // changeSelector(selector, util) { // optional, Funciton. Changing css selectors, in order to raise css priority, to resolve lazy-loading problems.
    //   //     return util.changeEach(selector, '.el-button--default')
    //   // },
    //   injectCss: false, // optional. Inject css text into js file, no need to download `theme-colors-xxx.css` any more.
    //   isJsUgly: process.env.NODE_ENV !== 'development', // optional. Set to `true` if your js is uglified. Default is set by process.env.NODE_ENV.
    // }),
    new webpack.DefinePlugin({ ENVConfig: getConfigOptions() }),
    new VueLoaderPlugin(), // 配合 vue-loader 使用
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',  // 主 css 文件名字
      chunkFilename: 'static/css/[name]-[id].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      title: '系统设置',
      filename: "index.html",
      template: path.resolve(process.cwd(), "index.html"),     // 模板
      inject: "body",  // script 标签插入到 html中的位置，head/body/false, 默认为插入body
      minify: {
        removeComments: false,     // 删除 html 中的注释
        collapseWhitespace: false,   // 删除 html 中空格
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", {
          loader: "less-loader", options: {
            lessOptions: {
              globalVars: {
                hack: `true; @import "@/style/var.less";`,
              }
            }
          }
        }],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", {
          loader: "sass-loader", options: {

          }
        }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',  // `type: 'asset'` 在导出一个 data URI 和发送一个单独的文件之间自动选择
        generator: {
          filename: 'static/img/[name]-[id][ext]',
        },
      },
      {
        test: /\.vue$/i,
        use: ["vue-loader"]
      },
      {
        test: /\.tsx?$/i,
        use: ["babel-loader"]
      },
      {
        test: /\.m?jsx?$/i,
        use: ["babel-loader"]
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