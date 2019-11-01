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
    domData: []
  },
  onShareAppMessage() {
    return {
    }
  },
  // 获取主页产品数据
  async getHomeProductData () {
    util.getCollectionData('home_product').then(({data}) => {
      wx.setStorage({ key: 'homeProduct', data: data})
      this.setData({homeProduct: data.map(t => {t.show = false; return t})})
    })
  },
  // 获取主页banner数据
  async getHomeBannerData () {
    util.getCollectionData('home_banner').then(({data}) => {
      this.setData({ homeBanner: data})
    })
  },
  //懒加载函数
  getLazyLoad (ret) {
    let that = this
    let homeProduct = that.data.homeProduct
    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        ret.forEach((item, index) => {
           if (item.top <= clientHeight) {
            homeProduct[index].show = true
           }
         })
        that.setData({homeProduct})
      }
    })
  },
  // 先获取数据
  onLoad () {
    this.getHomeProductData()
    this.getHomeBannerData()
  },
  onReady () {
    let time = setTimeout(() => {
      clearTimeout(time)
      time = null
      this.getElement()
    },400)  
  },
  // 获取元素
  getElement(){
    let that = this
      wx.createSelectorQuery().selectAll('.main_body_image_view').boundingClientRect((ret)=>{
        that.getLazyLoad(ret)
      }).exec()
  },
  // 页面滚动事件
  onPageScroll () {
    this.debounce(this.getElement, 500)
  },
  // 防抖函数
  debounce (fn, time) {
    clearInterval(fn.id)
    fn.id = setInterval(() => {
       fn.call(this)
    },time)
  }
})
