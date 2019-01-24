// pages/sle-consignee/sle-consignee.js
var app = getApp()
Page({
  data: {
    consignee_list: [
      {
        name: '张三1',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: true,
        seleted: true,
      },
      {
        name: '张三2',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: false,
        seleted: false,
      },
      {
        name: '张三3',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: false,
        seleted: false,
      },
      {
        name: '张三4',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: false,
        seleted: false,
      },
      {
        name: '张三1',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: true,
        seleted: true,
      },
      {
        name: '张三2',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: false,
        seleted: false,
      },
      {
        name: '张三1',
        phone: '1234567890',
        addr: '福建省福州市闽侯县上街镇福州大学生活一区6# 308',
        is_default: true,
        seleted: true,
      },
    ],
    contain_style: ""
  },

  onLoad: function (options) {
    // 屏幕适配
    if ((this.data.consignee_list.length + 1) * 160 * app.globalData.rpx_to_px
      < app.globalData.screenHeight - 60){
      this.setData({
        contain_style: "height:" + (app.globalData.screenHeight - 60) + "px;"
      })
    }else{
      console.log("screen full")
      this.setData({
        contain_style: "padding-bottom: 160rpx;"
      })
    }
  },

  //选择事件
  select_it: function(e) {
    var index = e.currentTarget.id
    var consignee_list_ = this.data.consignee_list
    if (!consignee_list_[index].seleted) {
      for (var i = 0; i < consignee_list_.length; i++) {
        consignee_list_[i].seleted = false
      }
      consignee_list_[index].seleted = true
      this.setData({
        consignee_list: consignee_list_
      })
    }
    try {
      wx.setStorageSync('sle-consignee', consignee_list_[index])
    }catch(e){}
    wx.navigateBack({
      delta: 1
    })
  }
})