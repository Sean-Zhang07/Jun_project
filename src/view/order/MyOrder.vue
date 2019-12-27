<template>
    <div class="container">
      <div class="nav">
        <router-link tag="i" to="/" class="el-icon-arrow-left icon-left"></router-link>
        <span class="nav-myorder">我的订单</span>
      </div>
      <div class="order-box">
        <div class="head">
          <ul
            class="head-list"
            v-for="(item, index) of headList"
            :key="index"
            @click="handleChangeColor(index)"
            :class="{headList: idx === index}"
          >
            <li class="head-title">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="shop-box">
            <div v-for="(item, index) of this.$store.state.menuList" :key="index">
              <div v-for="(itm, indx) of item.shopList" :key="indx" v-show="itm.showRec" class="shop-wrap">
                <div class="wrap-img">
                  <img :src="itm.imgUrl" alt="">
                </div>
                <div class="wrap-title">
                  <p>{{itm.title}}</p>
                </div>
                <div class="wrap-num">
                  <p>×{{itm.shopNum}}</p>
                </div>
                <div class="wrap-price">
                  <p>￥{{itm.price}}</p>
                </div>
              </div>
            </div>
            <div class="total-price">
              <span class="price">￥{{this.$store.state.totalShopPrice}}</span>
              <span>合计</span>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <router-link
          tag="p"
          to="/myorder"
          class="foot-style"
          @click="hanleStyle"
          :class="{footStyle: !isShowStyle}"
        >
          订单
        </router-link>
        <router-link
          tag="p"
          to="/home"
          class="foot-style"
          @click="hanleStyle"
          :class="{footStyle: isShowStyle}"
        >
          我的
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyOrder",
        data(){
          return{
            headList: [
              {
              id: '1',
              name: '全部',
            }, {
              id: '2',
              name: '付款',
            }, {
              id: '3',
              name: '可使用',
            }, {
              id: '4',
              name: '退款',
            }],
            isShowStyle: true,
            idx: 0
          }
        },
        methods: {
          hanleStyle(){
            this.isShowStyle = !this.isShowStyle
          },
          handleChangeColor(index){
            this.idx = index
          }
      }
    }
</script>

<style scoped>
  .nav{
    height: 1rem;
    width: 100%;
    line-height: 1rem;
  }
  .icon-left{
    position: relative;
    top: .04rem;
    left: .24rem;
    font-size: .4rem;
    color: #333;
  }
  .nav-myorder{
    padding-left: .2rem;
    color: #333;
  }
  .head{
    display: flex;
    justify-content: space-around;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #333;
    /*border-bottom: 1px solid #dcdcdc;*/
  }
  .foot{
    display: flex;
    position: fixed;
    bottom: 0;
    height: .8rem;
    width: 100%;
    background: #fff;
    border-top: 1px solid #dcdcdc;
  }
  .foot-style{
    width: 50%;
    text-align: center;
    line-height: .8rem;
    font-size: .24rem;
    color: #333;
  }
  .footStyle{
    width: 50%;
    text-align: center;
    line-height: .8rem;
    font-size: .24rem;
    color: #333;
    background: rgb(243,243,243);
  }
  .headList{
    color: red;
  }
  .order-box{
    overflow: hidden;
  }
  .box{
    background: rgb(249,249,249);
    width: 100%;
    height: 11rem;
    overflow: hidden;
  }
  .shop-box{
    background: #fff;
    padding-left: .24rem;
    margin-top: .24rem;
    margin-left: .24rem;
    margin-right: .24rem;
  }
  .shop-wrap{
    height: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    font-size: .26rem;
  }
  .wrap-img{
    height: .8rem;
    width: .8rem;
  }
  .wrap-img img{
    width: 100%;
    height: 100%;
  }
  .wrap-title{
    padding-left: .3rem;
    width: 2.8rem;
    color: #333;
  }
  .wrap-num{
    width: 2rem;
    color: #333;
  }
  .wrap-price{
    color: #333;
  }
  .total-price{
    height: 1rem;
    line-height: 1rem;
    display: flex;
    flex-direction: row-reverse;
    padding-right: .24rem;
    font-size: .26rem;
    color: #333;
  }
  .price{
    font-size: .34rem;
    padding-left: .1rem;
  }
</style>
