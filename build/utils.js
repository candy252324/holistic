const fs = require("fs")
const path = require("path")

exports.getConfigOptions = () => {
  const NODE_ENV = process.env.NODE_ENV
  const filePath = path.resolve(__dirname, `../config/${NODE_ENV}.json`)
  let fileData
  try {
    fileData = fs.readFileSync(filePath, "utf-8")
  } catch (error) {
    console.error("读取文件失败")
  }
  return JSON.parse(fileData)
}