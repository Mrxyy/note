// 云函数入口文件
const cloud = require('wx-server-sdk')
//初始化
cloud.init(
  {
    env: cloud.DYNAMIC_CURRENT_ENV
  }
)

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return {
    event,
    context,
    ...wxContext
  }
}