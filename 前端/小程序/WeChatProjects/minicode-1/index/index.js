const app = getApp()

Page({
  onLoad: function () {
    console.log(this.selectComponent('#the-id').myField) // should output "myValue"
  },
})
