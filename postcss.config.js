module.exports = {
  plugins: {
    // "postcss-px-to-viewport": {
    //   viewportWidth: 200, // 视口宽
    //   viewportHeight: 400, // 视口高
    //   unitPrecision: 3, // 保留小数点位数
    //   viewportUnit: 'vw', // 转化成什么单位
    //   selectorBlackList: [], // 白名单（不需要做转化的)
    // },
    "autoprefixer": {
      overrideBrowserslist: [
        'ie>8'
      ]
    }

  }
}