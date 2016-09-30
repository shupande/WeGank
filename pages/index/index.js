//index.js
Page({
  data: {
    hidden: true,
    imgurl: "http://ws1.sinaimg.cn/large/610dc034jw1f8a5uj64mpj20u00u0tca.jpg",
    title: "09月29日:今日力推：实战-Fluxion与wifi热点伪造、钓鱼、中间人攻击、wifi破解 / 支持 at 别人效果的 EditText，很实用 / Android7.0适配教程 / iOS 直接调用 ionicons 图标集合"
  },
  loadingChange: function () {
    this.setData({
      hidden: true
    })
  },
  loadingTap: function () {
    this.setData({
      hidden: false
    })

    var that = this
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 1500)
  },
  itemClick:function(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})