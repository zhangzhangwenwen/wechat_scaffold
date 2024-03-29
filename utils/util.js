const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 接口请求
const db = wx.cloud.database()
const getCollectionData = async (collect) => {
  try {
    return await db.collection(collect).get()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  formatTime: formatTime, 
  getCollectionData
}
