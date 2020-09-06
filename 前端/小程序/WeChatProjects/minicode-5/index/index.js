const app = getApp()

Page({
  formSubmit: function(e) {
    console.info('表单提交携带数据', e.detail.value)
  },
})
