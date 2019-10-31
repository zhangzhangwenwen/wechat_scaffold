//index.js
//获取应用实例
const app = getApp()
const util= require('../../utils/util')
Page({
  data: {
    isPhonex: false,
    picList: [1,2,3],
    homeProduct: [],
    homeBanner: [],
    imageArr: []
  },
  onShareAppMessage() {
    return {
    }
  },
  // 获取主页产品数据
  getHomeProductData () {
    let that = this
    util.getCollectionData('home_product').then(res => {
      that.setData({
        homeProduct: res.data.map(t => {t.show = false; return t})
      })
    })
  },
  // 获取主页banner数据
  async getHomeBannerData () {
    // let that = this
    // try {
    //   return await util.getCollectionData('home_banner').then(res => {
    //     that.setData({
    //       homeBanner: res.data
    //     })
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
    let that = this
    util.getCollectionData('home_banner').then(res => {
      that.setData({
        homeBanner: res.data
      })
    })
  },
  //懒加载函数
  getClientHeight (ret) {
    let that = this
    let homeProduct = that.data.homeProduct
    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        // let ratio = 750 / clientWidth;
        // let height = clientHeight * ratio;
        ret.forEach((item, index) => {
           if (item.top <= clientHeight) {
            homeProduct[index].show = true
           }
         })
        that.setData({homeProduct})
      }
    })
  },
  onLoad () {
    let that = this
    this.getHomeProductData()
    this.getHomeBannerData()
  },
  onReady () {
    let that = this
    setTimeout(() => {
      wx.createSelectorQuery().selectAll('.main_body_image_item').boundingClientRect((ret)=>{
        that.getClientHeight(ret)
      }).exec()        
    },300)
  }
})
