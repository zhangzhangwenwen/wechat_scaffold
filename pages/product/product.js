// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    lists: [
      {name: '吊篮', eng: 'diaolan_pic'},
      {name: '吊篮安装图', eng: 'diaolan_work'},
      {name: '升降平台', eng: 'up_down'}
    ],
    indexId: 0,
    indexEng: '',
    sliderTop: 0,
    productList: [],
    totalPicObject: {}
  },

  // 左侧点击事件
  jumpIndex(e) {
    let current = typeof(e.detail.current) === 'number' ? e.detail.current.toString() : e.detail.current
    if (current === this.data.indexId) return
    let index = e.currentTarget.dataset.menuindex || current
    let sliderTop = index * 200
    this.setData({
      indexId: index,
      sliderTop
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    wx.getStorage({
      key: 'homeProduct',
      success(res){
        let indexEng = that.data.lists[0]
        that.setData({indexEng})
        that.initPicData(res.data) // 初始化数据格式
      }
    })
  },
  initPicData (val) {
    let totalPicObject = this.data.totalPicObject
    this.data.lists.forEach(item => {
      if (!totalPicObject[item.eng]){totalPicObject[item.eng] = []}
      totalPicObject[item.eng] = [...val.filter(t=>{ return ~t.src.indexOf(item.eng)})]
    })
    this.setData({totalPicObject})
  },
  // swiper滑动事件
  handleCurrentChange (res) {
    this.jumpIndex(res)
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
    return {
      title: '提供吊篮、脚手架以及升降平台的租赁～',
      path: 'pages/home/home'
    }
  }
})