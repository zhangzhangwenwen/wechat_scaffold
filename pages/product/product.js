// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    lists: [
      "吊篮", "脚手架", "吊篮安装图", "脚手架安装图"
    ],
    indexId: 0,
    sliderTop: 0
  },

  // 左侧点击事件
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let sliderTop = index * 200
    let that = this
    that.setData({
      indexId: index,
      sliderTop
    });
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