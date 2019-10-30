//index.js
//获取应用实例
const app = getApp()

wx.getSystemInfo({
    success: function(res) {
    //model中包含着设备信息
      console.log(res.model)
        var model = res.model
        if (model.search('iPhone X') != -1){
            app.globalData.isIpx = true;
        }else{
           app.globalData.isIpx = false;
       }
    }
 })

Page({
  data: {
    isPhonex: false,
    picList: [1,2,3]
  },
  onShareAppMessage() {
    return {
    }
  },
  onLoad () {
    var isPhonex = app.globalData.isIpx;
    if(isPhonex){
      this.setData({
        isPhonex
      })
    }
  }
})
