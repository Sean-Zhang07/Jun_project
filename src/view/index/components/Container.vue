<template>
  <div class="container">
      <!--左边菜单-->
      <div class="left">
        <div
          class="menu-list"
          v-for="(item, index) of this.$store.state.menuList"
          :key="index"
          @click="handleMenu(index)"
          :class="{menuColor: num===index}"
        >
          <p class="menu-color">{{item.name}}</p>
        </div>
      </div>
      <!--右边列表-->
      <div ref="wrapper" class="wrapper">
        <div class="right">
          <div v-for="(itm, indx) of this.$store.state.menuList" :key="indx" v-if="indx === num">
            <div class="title">
              <p>{{itm.name}}</p>
            </div>
            <div v-for="(shop, idxshop) of itm.shopList" :key="idxshop">
              <div class="shop-box">
                <!--跳转链接-->
                <router-link tag="div" :to="`/detail/${shop.id}`" class="shop-wrap">
                  <div class="shop-img">
                    <img :src="shop.imgUrl" alt="">
                  </div>
                  <div class="shop-text">
                    <p class="shop-title">{{shop.title}}</p>
                    <p class="shop-sale">{{shop.sale}}</p>
                    <p class="shop-price">￥{{shop.price}}</p>
                  </div>
                </router-link>
                <div class="shop-icon">
                  <div class="shopping-icon">
                    <i
                      class="el-icon-remove-outline"
                      v-show="shop.showRec"
                      @click="handleRec(indx, idxshop)"
                    ></i>
                    <input type="text" class="input" v-show="shop.showRec" v-model="shop.shopNum">
                    <i
                      class="el-icon-circle-plus add-icon"
                      @click="handleAdd(indx, idxshop)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrap">
              <p>没有更多了~</p>
            </div>
            <div class="menu-nav" @click="handleShowNav" v-show="showNav">
              <p>快捷导航</p>
            </div>
            <div class="box-nav" v-show="!showNav" @click="handleShowNav">
              <div class="nav">
                <p class="iconfont box-icon">&#xe693;</p>
                <p>发券</p>
              </div>
              <router-link tag="div" to="/myorder" class="nav">
                <p class="iconfont box-icon">&#xe61e;</p>
                <p>订单</p>
              </router-link>
              <router-link tag="div" to="/home" class="nav">
                <p class="iconfont box-icon">&#xe63a;</p>
                <p>我的</p>
              </router-link>
              <div class="nav-icon">
                <p class="border"></p>
                <p class="el-icon-arrow-down"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<script>
  // import BScroll from 'better-scroll'
  export default {
    name: "IndexContainer",
    data() {
      return {
        num: 0,
        showNav: true
      }
    },
    methods: {
      handleMenu(index) {
        this.num = index
      },
      handleShowNav(){
        this.showNav = !this.showNav
      },
      //点击添加，数量增加
      handleAdd(indx, idxshop){
        let that = this
        let list = that.$store.state.menuList[indx].shopList[idxshop]
        list.showRec = true
        //用来判断那个box的添加点击了
        list.showShop = true
        list.shopNum = Number(list.shopNum)
        list.shopNum += 1
        that.$store.dispatch('changTotalPrice', that.totalShopPrice)
      },
      //点击减少，数量减少
      handleRec(indx, idxshop){
        let that = this
        let list = that.$store.state.menuList[indx].shopList[idxshop]
        list.shopNum = Number(list.shopNum)
        list.shopNum -= 1
        //vuex共享数据 修改state
        that.$store.dispatch('changTotalPrice', that.totalShopPrice)
        //当数值为0的时候，则把减号隐藏
        if (list.shopNum === 0){
          list.showRec = false
        }
      }
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
  .container {
    display: flex;
    flex-direction: row;
    height: 9.4rem;
    width: 100%;
    border-top: 1px solid #f5f5f5;
    overflow: hidden;
  }

  .left {
    width: 23%;
    text-align: center;
  }

  .wrapper{
    height: 4rem;
    width: 77%;
  }

  .right {
    flex: 1;
    overflow: auto;
    height: 471px;
    transform: none;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1.1rem;
    width: 100%;
    text-align: center;
    background:rgb(248,248,248);
    color: rgb(154,154,154);
    border-bottom: 1px solid #fff;
  }

  .menu-color {
    width: 60%;
    padding-left: .34rem;
    line-height: .4rem;
    font-size: .24rem;
  }

  .menuColor {
    background: #fff;
    color: #333;
  }

  .title{
    margin-left: .2rem;
    color: rgb(154,154,154);
    font-size: .24rem;
    border-bottom: 1px solid #f5f5f5;
    padding: .16rem 0;
  }

  .shop-box{
    display: flex;
    height: 1.64rem;
    width: 100%;
    margin-left: .2rem;
    padding-top: .24rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .shop-wrap{
    display: flex;
    width: 2.8rem;
  }
  .shop-img{
    width: 1.4rem;
    height: 1.4rem;
  }

  .shop-img img{
    width: 100%;
    height: 100%;
  }

  .shop-text{
    flex: 1;
    margin-left: .2rem;
  }

  .shop-title{
    color: #333;
    padding-bottom: .2rem;
  }

  .shop-sale{
    color: #999;
    font-size: .24rem;
    padding-bottom: .2rem;
  }

  .shop-price{
    color: rgb(255, 109, 0);
    font-size: .32rem;
  }
  .shop-icon{
    width: 2rem;
  }
  .shopping-icon{
    display: flex;
    height: .6rem;
    margin-top: .9rem;
    margin-left: 1rem;
  }
  .add-icon{
    position: fixed;
    right: .3rem;
  }
  .shopping-icon i{
    text-align: center;
    line-height: .6rem;
    font-size: .44rem;
    color: rgb(255, 99, 54);
  }
  .input{
    width: .6rem;
    text-align: center;
    line-height: .6rem;
  }
  .wrap{
    color: #999;
    font-size: .24rem;
    text-align: center;
    margin-top: .3rem;
  }
  .menu-nav{
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    font-size: .24rem;
    border: 1px solid rgb(204,204,204);
    position: fixed;
    bottom: 1.4rem;
    right: .3rem;
  }
  .menu-nav p{
    width: .5rem;
    position: fixed;
    bottom: 1.58rem;
    right: .48rem;
    font-size: .2rem;
    line-height: .26rem;
  }
  .box-nav{
    height: 4.2rem;
    width: .8rem;
    background: #fff;
    border: 1px solid rgb(204,204,204);
    position: fixed;
    bottom: 1.4rem;
    right: .3rem;
    border-radius: .44rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .nav{
    text-align: center;
    font-size: .2rem;
    color: #666;
  }

  .nav-icon{
    text-align: center;
    font-size: .36rem;
    color: #333;

  }
  .border{
    border-top: 1px solid rgb(204,204,204);
    bottom: .14rem;
  }
  .box-icon{
    font-size: .4rem;
    padding-bottom: .06rem;
  }
</style>
