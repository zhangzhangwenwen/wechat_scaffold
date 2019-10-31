//index.js
//获取应用实例
const app = getApp()
const util= require('../../utils/util')
Page({
  data: {
    isPhonex: false,
    picList: [1,2,3],
    homeProduct: [],
    homeBanner: []
  },
  onShareAppMessage() {
    return {
    }
  },
  onLoad () {
    let that = this
    util.getCollectionData('home_product').then(res => {
      console.log(res)
      that.setData({
        homeProduct: res.data
      })
    })
    util.getCollectionData('home_banner').then(res => {
      that.setData({
        homeBanner: res.data
      })
    })
  }
})
