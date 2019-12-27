//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    totalShopPrice: 0,
    menuList: [
      {
        id: '1',
        name: "-新品-NEW",
        shopList: [{
          id: '01',
          title: '鲜鱼蒸饺',
          imgUrl: '@/../static/image/title.png',
          sale: '月售2',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }, {
          id: '02',
          title: '鲜鱼蒸饺',
          imgUrl: '@/../static/image/title.png',
          sale: '月售5',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }, {
          id: '03',
          title: '鲜鱼蒸饺',
          imgUrl: '@/../static/image/title.png',
          sale: '月售23',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '2',
        name: "-鲜煮意-冷冻商品",
        shopList: [{
          id: '04',
          title: '卤猪脚',
          imgUrl: '@/../static/image/shopImg5.png',
          sale: '月售2',
          price: 20,
          showRec: false,
          showShop: false,
          shopNum: '',
        }, {
          id: '05',
          title: '卤猪脚',
          imgUrl: '@/../static/image/shopImg5.png',
          sale: '月售653',
          price: 20,
          showRec: false,
          showShop: false,
          shopNum: '',
        }, {
          id: '06',
          title: '卤猪脚',
          imgUrl: '@/../static/image/shopImg5.png',
          sale: '月售233',
          price: 20,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '3',
        name: "包妹蒸点",
        shopList: [{
          id: '07',
          title: '特色小笼包',
          imgUrl: '@/../static/image/shopImg4.png',
          sale: '月售265',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '4',
        name: "包妹小菜",
        shopList: [{
          id: '08',
          title: '糖醋小排',
          imgUrl: '@/../static/image/shopImg3.png',
          sale: '月售256',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '5',
        name: "包妹炒菜",
        shopList: [{
          id: '09',
          title: '清炒豆苗',
          imgUrl: '@/../static/image/shopImg6.png',
          sale: '月售29',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '6',
        name: "包妹汤品",
        shopList: [{
          id: '10',
          title: '酸辣汤',
          imgUrl: '@/../static/image/shopImg2.png',
          sale: '月售2895',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '7',
        name: "包仔主食",
        shopList: [{
          id: '11',
          title: '排骨蛋饭',
          imgUrl: '@/../static/image/shopImg.png',
          sale: '月售2895',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }, {
        id: '8',
        name: "包妹甜品",
        shopList: [{
          id: '12',
          title: '豆沙小包',
          imgUrl: '@/../static/image/shopImg1.png',
          sale: '月售2956',
          price: 66,
          showRec: false,
          showShop: false,
          shopNum: '',
        }]
      }],
    isShowTemp: false,
  },
  actions:{
    changTotalPrice (ctx, totalPrice){
      ctx.commit('changTotalPrice', totalPrice)
    },

  },
  mutations:{
    changTotalPrice (state, totalPrice){
      state.totalShopPrice = totalPrice
    },

  }
})
