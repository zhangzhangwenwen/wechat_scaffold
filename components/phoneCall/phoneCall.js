// components/phoneCall/phoneCall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 0,
    left: 0,
    windowHeight: '',
    windowWidth: '',
    startPoint: null
  },
  attached () {
    // 在组件实例进入页面节点树时执行
    var that =this;
    wx.getSystemInfo({
      success: function (res) {
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
          left: res.windowWidth - 50,
          top: 200
        })
      }
    })
  },
  detached () {
    let locationObj = {
      left: this.data.left,
      top: this.data.top
    }
    wx.setStorage({
      key: 'location',
      data: locationObj,
      success: function(res){
        // success
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlePhoneCall () {
      wx.makePhoneCall({
        phoneNumber: '18082899333' //仅为示例，并非真实的电话号码
      })
    },
    phoneStart (e) {
      this.setData({startPoint: e.touches[0]})
    },
    // 移动结束
    phoneEnd () {
    },
    // 电话移动
    phnoneMove  (e) {
      var endPoint = e.touches[e.touches.length - 1]
      var translateX = endPoint.clientX - this.data.startPoint.clientX
      var translateY = endPoint.clientY - this.data.startPoint.clientY
      this.setData({startPoint: endPoint})
      var buttonTop = this.data.top + translateY
      var buttonLeft = this.data.left + translateX
      //判断是移动否超出屏幕
      if (buttonLeft + 50 >= this.data.windowWidth){
        buttonLeft = this.data.windowWidth - 50;
      }
      if (buttonLeft <= 20){
        buttonLeft = 20;
      }
      if (buttonTop <= 0){
        buttonTop = 0
      }
      if (buttonTop + 50 >= this.data.windowHeight){
        buttonTop = this.data.windowHeight - 50
      }
      this.setData({
        top: buttonTop,
        left: buttonLeft
      })
    }
  }
})
