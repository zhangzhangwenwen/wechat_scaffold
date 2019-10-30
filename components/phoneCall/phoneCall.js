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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePhoneCall () {
      wx.makePhoneCall({
        phoneNumber: '18361482827' //仅为示例，并非真实的电话号码
      })
    }
  }
})
