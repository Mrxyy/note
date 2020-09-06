const app = getApp()

Page({
  data: {
    bgTextStyle: 'dark',
    scrollTop: undefined,
    bgColor: '#ff0000',
    bgColorTop: '#00ff00',
    bgColorBottom: '#0000ff',
    nbTitle: '原标题',
    nbLoading: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        bgTextStyle: 'light',
        bgColor: '#ffff00',
        bgColorTop: '#00ffff',
        bgColorBottom: '#ff00ff',
        nbTitle: '新标题',
        nbLoading: true,
        nbFrontColor: '#ffffff',
        nbBackgroundColor: '#000000',
      })
    }, 5000)
  },
  scrollTo100: function () {
    this.setData({
      scrollTop: '200rpx'
    })
  },
  pageScroll: function (e) {
    console.log('scroll', e.detail)
  },
  pageResize: function (e) {
    console.log('resize', e.detail)
  },
  pageScrollDone: function (e) {
    console.log('scrolldone', e.detail)
  },
  onPullDownRefresh() {}
})
