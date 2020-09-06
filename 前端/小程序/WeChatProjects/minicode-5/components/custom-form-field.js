Component({
  behaviors: ['wx://form-field'],

  attached() {
    this.setData({
      value: 'custom-value'
    })
  }
})
