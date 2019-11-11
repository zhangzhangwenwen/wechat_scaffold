// components/phoneCall/phoneCall.js
var app = getApp()
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
    this.setInitLocation()
    // 在组件实例进入页面节点树时执行
  },
  detached () {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setInitLocation () {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          var top = app.globalData.phoneLocation.top
          if (app.globalData.phoneLocation.top + 40 >= res.windowHeight){
            top = res.windowHeight - 40
          }
          // 高度,宽度 单位为px
          that.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth,
            left: app.globalData.phoneLocation.left,
            top: top,
          })
        }
      })
    },
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
      if (buttonLeft + 40 >= this.data.windowWidth){
        buttonLeft = this.data.windowWidth - 40;
      }
      if (buttonLeft <= 20){
        buttonLeft = 20;
      }
      if (buttonTop <= 0){
        buttonTop = 0
      }
      if (buttonTop + 40 >= this.data.windowHeight){
        buttonTop = this.data.windowHeight - 40
      }
      this.setData({
        top: buttonTop,
        left: buttonLeft
      })
      app.globalData.phoneLocation.top = buttonTop
      app.globalData.phoneLocation.left = buttonLeft
    }
  }
})
