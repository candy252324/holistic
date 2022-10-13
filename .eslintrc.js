module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",  // eslint-plugin-vue 提供的 rules 规则合集
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["build/**"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"  // build 文件夹下允许使用 require 语句
      }
    }
  ],
  parser: "vue-eslint-parser",  // 可以解析 <template> 标记
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析 <script> 标记 
    ecmaVersion: "latest",
    sourceType: "module",
    vueFeatures: {
      filter: true,  // 是否解析vue2的filter，true:按vue2的filter解析  false:按vue3位操作符解析
    },
    ecmaFeatures: {
      jsx: true // 允许代码中使用 jsx
    }
  },
  plugins: [
    "vue",  // 即 eslint-plugin-vue
    "@typescript-eslint"
  ],
  rules: {
    "vue/html-self-closing": 0,   // 自闭合标签
    "@typescript-eslint/no-explicit-any": 0  // 允许使用 any
  }
}
