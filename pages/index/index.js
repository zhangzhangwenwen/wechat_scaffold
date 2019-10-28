//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onShareAppMessage() {
    return {
    }
  },
  handlePhoneCall () {
    wx.makePhoneCall({
      phoneNumber: '18361482827' //仅为示例，并非真实的电话号码
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
