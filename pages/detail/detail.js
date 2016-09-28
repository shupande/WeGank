Page({
  data: {
    array: ['Android', 'iOS','前端','APP','拓展资源', '福利', '休息视频','瞎推荐'],
    index: 0
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})