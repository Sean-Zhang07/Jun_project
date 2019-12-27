<template>
    <div class="container">
      <!--循环详情页的内容-->
      <div class="head" v-for="(item, index) of restul" :key="index">
        <div>
          <router-link tag="i" to="/" class="el-icon-arrow-left icon-left"></router-link>
        </div>
        <div class="head-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="head-title">
          <div class="left">
            <p class="left-title">{{item.title}}</p>
            <p class="left-sale">{{item.sale}}</p>
            <p class="left-price">￥{{item.price}}</p>
          </div>
          <div class="right">
            <p class="right-car" @click="handleCar(index)">加入购物车</p>
          </div>
        </div>
      </div>
      <div class="detail-desc">
        <div class="detail-desc-head">
          <p class="detail-desc-title">商品信息</p>
          <p class="detail-desc-msg">选用深海巴沙鱼搭配猪肉馅，口感上鲜甜多汁。本品为冷冻半成品，购买后请务必蒸熟食用。特别注意:冷冻蒸饺、烧麦需冷冻，保存温度为-18°C以下,食用方法及保存期限详见包装盒上说明，购买7日内享用,口感最佳.</p>
        </div>
      </div>
      <div>
        <index-car></index-car>
      </div>
    </div>
</template>

<script>
    import IndexCar from '../index/components/Car'
    export default {
        name: "Detail",
        data(){
          return{
            //获取路由id
            g_id: this.$route.params.id,
            restul: [],
          }
        },
        //引用组件
        components: {
          IndexCar
        },
        methods: {
          handleCar(index){
            let data = this.restul[index]
            data.shopNum = Number(data.shopNum)
            data.shopNum += 1
            this.$store.dispatch('changTotalPrice', this.totalShopPrice)
          },
          getData(){
            let ids = this.g_id
            let data = this.$store.state.menuList
            let list = []
            data.forEach(item =>{
              item.shopList.forEach(itm =>{
                if (itm.id === ids){
                  list.push(itm)
                }
              })
            })
            this.restul = list
          }
        },
        //钩子函数
        mounted() {
          this.getData()
        },
       // 计算属性
        computed:{
          totalShopPrice(){
            let totalPrice = 0
            let data = this.$store.state.menuList
            data.forEach(item =>{
              item.shopList.forEach(itm =>{
                itm.shopNum = Number(itm.shopNum)
                totalPrice += itm.price * itm.shopNum
              })
            })
            return totalPrice
          },
        }
    }
</script>

<style scoped>
  .head-img{
    width: 100%;
    height: 7rem;
  }
  .head-img img{
    width: 100%;
    height: 100%;
  }
  .head-title{
    height: 1.4rem;
    width: 100%;
    display: flex;
    padding-top: .32rem;
  }
  .left{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: .4rem;
    color: #333;
    font-size: .32rem;
  }
  .right{
    flex: 1;
  }
  .left-price{
    color: rgb(255, 109, 0);
    font-size: .32rem;
  }
  .left-sale{
    font-size: .24rem;
    color: #999;
  }
  .right-car{
    background: rgb(255, 109, 0);
    height: .5rem;
    width: 45%;
    text-align: center;
    line-height: .5rem;
    color: #fff;
    margin-left: 1.6rem;
    margin-top: .4rem;
    border-radius: .1rem;
    font-size: .24rem;
  }
  .detail-desc-head{
    padding-left: .4rem;
    padding-top: .6rem;
    color: #333;
  }
  .detail-desc-msg{
    padding-top: .4rem;
    padding-right: .4rem;
    color: #999;
    font-size: .24rem;
    letter-spacing: 1px;
    line-height: .3rem;
  }
  .icon-left{
    position: absolute;
    top: .3rem;
    left: .3rem;
    width: .6rem;
    height: .6rem;
    font-size: .4rem;
    background: #8a8a8a;
    color: #fff;
    text-align: center;
    line-height: .6rem;
    border-radius: 50%;
  }
</style>
