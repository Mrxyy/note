// pages/test/test1/index.js
Page({

  /**sssssssaaaasss
   * 页面的初始数据
   */
  data: {
      myInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //建立数据库的连接
    const db= wx.cloud.database({
      env: "xyykf"
    })
    const usersCollect = db.collection('users');
    console.log(usersCollect)
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
  test1:function(a){
    wx.cloud.callFunction({
      name:"test1",
      success:function(e){
        console.log(e,111)
      }
    })

  }
})