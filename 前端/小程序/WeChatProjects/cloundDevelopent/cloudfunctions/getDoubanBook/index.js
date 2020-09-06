// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require("axios")
const doubanbook = require("doubanbook")
const cheerio =  require("cheerio")

cloud.init()

async function getBookInfo(id) {
  let infoObj = {}
  let info = await axios.get("https://search.douban.com/book/subject_search?search_text="+id)
  const RGL = /window\.__DATA__ = \"(.+)\"/g
  if(RGL.test(info.data)){
    //解密信息，返回一个对象
    let a = doubanbook(RegExp.$1)
    console.log(a);
    
    for(var i in a){
      let infoDetail = await axios.get(a[i].url)
      // console.log(infoDetail.data)
      //使用cheerio解析HTML字段
      let $ = cheerio.load(infoDetail.data)

      let  info = $("#info").text().split("\n").map(v=>v.trim()).filter(v => v)

      let tags = []
      $("#db-tags-section .tag").each((i,v)=> tags.push($(v).text()))
      
      infoObj.author = info[1]
      infoObj.title  = a[i].title
      infoObj.rating =a[i].rating
      infoObj.url = a[i].url
      infoObj.cover_url = a[i].cover_url
      infoObj.tags = tags
      infoObj.introduce = $(".intro p").text()
    }
    
    // console.log(infoObj)
    return infoObj
  }
  // let a = await axios.get("https://haokan.baidu.com/videoui/api/videorec?tab=yingshi&act=pcFeed&pd=pc&num=5&shuaxin_id=1591675819489")
  //  console.log(a.data.data.response.videos)
}
  
getBookInfo(9787115320339)
// 云函数入口函数
exports.main = async (event, context) => {
  const id  = event.result
  if(id){
    return await getBookInfo(id)
  }
}
