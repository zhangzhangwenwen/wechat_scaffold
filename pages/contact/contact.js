// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/image/marker.png",
      id: 0,
      callout: {
        color: '#000000',
        fontSize: 15,
        borderRadius: 10,
        padding: 2,
        content: '红星吊篮脚手架出租',
        display: 'ALWAYS',
        textAlign: 'center'
      },
      //119.418869,32.218379
      latitude: 32.218379,
      longitude: 119.418869,
      width: 30,
      height: 30
    }]
  },
  handlePhoneCall (event) {
    let number = event.currentTarget.dataset.gid
    wx.makePhoneCall({
      phoneNumber: number //仅为示例，并非真实的电话号码
    })
  },
  // 视野发生变化
  regionchange(e) {
    console.log(e.type)
  },
  // 点击标记点
  markertap(e) {
    console.log(e.markerId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})