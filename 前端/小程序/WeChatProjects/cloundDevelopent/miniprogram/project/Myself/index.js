// project/Myself/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看之前是否有设置过用户信息
    console.log(wx.getStorageSync('myInfo')) //同步获取stroage数据
    this.setData({'myInfo':wx.getStorageSync('myInfo')||null})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo(e) {
    console.log(e)
    //用户信息
    if(e.detail.userInfo){
      this.setData({
        //将用信息获取
        'myInfo':e.detail.userInfo
      })
    }
    // open_id 不需要登录
    wx.cloud.callFunction({
      name: "domelogin",
      success: (e) => {
        console.log(e)
        //合并用户信息
        this.data.myInfo.openId = e.result.OPENID
        // 设置用户信息缓存
        wx.setStorageSync('myInfo', this.data.myInfo)
      }
    })
    // e: detail字段
    /*
        cloudID: "33_JCb5KWiT4CuwOtS11qbbBpYGBslRinJM_uiylNLQHMl6iWh5PG-vUrzOg8U"
        encryptedData: "zzdx940SnpJC+1Q69LFvrQiQAxSEb0TT1d/3HNu+0/i1YSnU/cefJ0MVZexF58EqAkkNzCYJwwVYVLTJSdPtnxiyNrUsp6BSpq08NOuwjv7Gy/2cZFjNub1+bVuZbCl88VlPLWP4+2IOjiijBa2heS4XrZW2ola5qSzl5tXsu+u1TQbw+CQ0H1ZYpHzn7t+otdsILy6oUQPjU8VfRaZ0V2sN8fUiDqYQA7CHVmWhtThVtKm2aYB+J2hM9ZuZ1ihjn5VWaMepNqo9Cs16OMLxdWKCfV9Maw0v/uV2wWpilgNkh7fz97vUyAkHQ+IActnX71VTY6Q4sR0i/S2vqltjoJpAdozMOOmNxgmv2HLnUxwZdw11BtPnADOkhMXh+bc5DzIFLs9sHp/aCS1pXbautF2mzSYxJu0/izRG/Xj46Is54kGJ3l4OUlHhACkroQSUCpDAVihvS9Yg6AhmyTam5fQuOYYCHFFSiXHPH7icSPo="
        errMsg: "getUserInfo:ok"
        iv: "2TM0G6mudxe7vFbw5gnZ8g=="
        rawData: "{"nickName":".","gender":1,"language":"zh_CN","city":"","province":"Buenos Aires","country":"Argentina","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/g3YXPexPibOibahbhiawldwj8l9oPzTbJMicZU1k6LPhsZJqSu5aCaGmA0ibBHllf83icYbDq3pRcuO5QUdcHzSk3V8w/132"}"
        signature: "3df5fa3576d0d06305ad6c63beafabcd731871f5"
        userInfo:{
                 avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/g3YXPexPibOibahbhiawldwj8l9oPzTbJMicZU1k6LPhsZJqSu5aCaGmA0ibBHllf83icYbDq3pRcuO5QUdcHzSk3V8w/132"
                city: ""
                country: "Argentina"
                gender: 1
                language: "zh_CN"
                nickName: "."
                province: "Buenos Aires"
        }
    */
  },
  scancode(){
      wx.scanCode({
        success: function(res){
          // success
          console.log(res)
          //小程序本身是不能进行爬虫的，有安全域名设置，需要通过node进行爬虫即为云函数
          //async calllFunction => await  a = fx(obj)  return a
          
          // 1.async中虽然函数调用返回promise对象，但是函数体内不需要返回promise对象。只是将返回体作为参数reject(),async起到的是包装作用
          // 2.使用awite关键字调用可以去掉async包装
          wx.cloud.callFunction({
            name:"getDoubanBook",
            data:{
              result:res.result
            },
           success: function(res) {
             let db = getApp().globalData.db
             //使用一个表
            //  let userCollection = await  
           
             db.collection('users').get({ 
               success: function(e){console.log(res,e)}
             })
           },
           fail:function(e){
             console.log(e)
           }
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
})