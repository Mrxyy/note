// index/comp.js
Component({
  behaviors: ['wx://component-export'],
  export: function() {
    return { myField: 'myValue' }
  }
})
