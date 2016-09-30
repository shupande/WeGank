Page({
  data: {
    modalHidden: true,
    toastHidden: true,
    items:[]
  },
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e){
    this.setData({
      modalHidden: true
    })
  },
  saveImage: function(e){
    this.setData({
      modalHidden: true,
      toastHidden: false
    });
    console.log("保存图片");
  },
  toastChange: function(e){
    console.log("toast");
    this.setData({
      toastHidden: true
    })
  },
  openUrl: function(e){
    wx.navigateTo({
      url: 'https://github.com/Bouke/SwiftInitializerGenerator'
   });
  }
})