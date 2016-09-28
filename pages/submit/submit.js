Page({
  data: {
    array: ['Android', 'iOS','前端','APP','拓展资源', '福利', '休息视频','瞎推荐'],
    // index: 0,
    text:"请对着屏幕发誓，接下来提交的都是干货~",
    mode: 'aspectFit',
    src:"../../image/i_love_u.png"
  },
  bindPickerChange: function (event) {
        this.setData({index: event.detail.value})
  },
  formSubmit: function(e) {
    commit(data);
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})

//提交方法
function commit(data) {
    console.log(Util.json2Form(data));
    wx.request({
        url: "https://gank.io/api/add2gank",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: Util.json2Form(data).concat("&debug=ture"),

        complete: function (res) {
            if (res == null || res.data == null || res.data.msg == null) {
                console.error(Constant.ERROR_DATA_IS_NULL);
                return;
            }
            that.setData({toastHidden: false, toastText: res.data.msg});
        }
    });

}