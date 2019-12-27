<template>
    <div class="order">
      <div class="order-head">
        <router-link tag="i" to="/" class="el-icon-arrow-left icon-left"></router-link>
        <span class="submit-order">提交订单</span>
      </div>
      <div class="take-out">
        <p>外卖配送</p>
      </div>

      <div class="location">
        <router-link
          tag="div"
          to="/order/address"
          class="harvest-address"
        >
          <p v-show="addres === ''">请选择地址</p>
          <i v-show="addres === ''" class="el-icon-arrow-right address-icon"></i>
          <p v-for="(im, ind) of addres" :key="ind">{{im.address}}</p>
        </router-link>
        <div class="delivery-time">
          <p class="time">配送时间</p>
          <p class="desc">尽快送出</p>
        </div>
        <div class="remark">
          <p class="remark-left">备注</p>
          <p class="remark-right">
            <i class="el-icon-arrow-right remark-icon"></i>
            <i>口味、偏好</i>
          </p>
        </div>
      </div>

      <div class="shop">
        <div class="shop-box">
          <div class="shop-name">
            <p>北京鼎泰丰(渔阳店)</p>
          </div>
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
        <div class="order-pay">
          <div class="pay-left">
            <p class="pay-price">￥{{this.$store.state.totalShopPrice}}</p>
            <p>已优惠￥0</p>
          </div>
          <router-link tag="div" to="/myorder" class="pay-right">
            <p>去支付</p>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    import bus from '@/store/bus'
    export default {
        name: "Order",
        data(){
          return{
            addres:'',
          }
        },
      created(){
         this.addres = this.$route.query.addres;
      },

    }
</script>

<style scoped>
  .order-head{
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
  .submit-order{
    padding-left: .2rem;
    color: #333;
  }
  .take-out p{
    height: .6rem;
    width: 1.6rem;
    text-align: center;
    line-height: .6rem;
    background: rgb(255, 99, 54);
    border-radius: 15px;
    color: #fff;
    margin-left: .24rem;
    margin-top: .4rem;
    font-size: .26rem;
  }
  .location{
    padding-left: .24rem;
  }
  .harvest-address{
    display: flex;
    height: 1.5rem;
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  .harvest-address p{
    line-height: 1.7rem;
    text-align: center;
    width: 95%;
    color: #999;
    font-size: .26rem;
  }
  .address-icon{
    line-height: 1.7rem;
    color: #333;
  }
  .delivery-time{
    display: flex;
    height: 1rem;
    border-bottom: 1px solid rgb(204, 204, 204);
    line-height: 1rem;
    font-size: .26rem;
  }
  .time{
    width: 50%;
    color: #333;
  }
  .desc{
    display: flex;
    flex-direction: row-reverse;
    color: #999;
    flex: 1;
    padding-right: .46rem;
  }
  .remark{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    font-size: .26rem;
  }
  .remark-left{
    width: 50%;
    color: #333;
  }
  .remark-right{
    color: #999;
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    padding-right: .24rem;
  }
  .remark-icon{
    line-height: 1rem;
    color: #333;
  }
  .shop{
    border-top: 10px solid rgb(241, 241, 241);
    background: rgb(241, 241, 241);
    height: 7.6rem;
  }
  .shop-box{
    background: #fff;
    padding-left: .24rem;
  }
  .shop-name{
    height: .7rem;
    line-height: .7rem;
    border-bottom: 1px solid rgb(204, 204, 204);
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
    width: 2.2rem;
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
  .order-pay{
    display: flex;
    position: absolute;
    bottom: 0;
    background: #fff;
    height: .8rem;
    width: 100%;
  }
  .pay-left{
    width: 70%;
    color: #999;
    font-size: .24rem;
    padding-left: .24rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pay-price{
    font-size: .34rem;
    color: rgb(255, 99, 54);
  }
  .pay-right{
    flex: 1;
    line-height: .8rem;
    background: rgb(255, 99, 54);
    color: #fff;
    text-align: center;
  }
</style>
