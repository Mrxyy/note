Page({
  data: {
    current: {
      poster: 'http://p2.music.126.net/oxBIGY-ZOZUoaZkR8m6mJQ==/109951164542290755.jpg',
      name: '此时此刻',
      author: '许巍',
      src: 'http://audio04.dmhmusic.com/71_53_T10051697647_128_4_1_0_sdk-cpm/cn/0206/M00/B1/90/ChR47F2HBI-AKaXOAHHVZRutW2A034.mp3?xcode=019f1b0bc65b11ad64169fbcb53f61b92b85b60',
    },
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  audioTimeUpdated: function (e) {
    this.duration = e.detail.duration;
  },

  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },

  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})