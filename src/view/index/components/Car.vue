<template>
  <div :class="{container: isShow}">
    <div class="shop-car">
      <div class="car-icon">
        <el-badge
          :value=totalSum
          class="vaule"
          v-show="totalSum != 0"
        >
        </el-badge>
        <i
          class="iconfont icon"
          :class="{iconCar: totalSum != 0}"
          @click="toggle"
        >
          &#xe621;
        </i>
      </div>
      <div class="car-price" @click="toggle">
        <span>￥{{this.$store.state.totalShopPrice}}</span>
      </div>
      <div
        class="car-text"
        :class="{carText: this.$store.state.totalShopPrice >= price}"
      >
        <p v-if="this.$store.state.totalShopPrice === 0 ">￥{{price}}起送</p>
        <p v-else-if="this.$store.state.totalShopPrice < price">还差￥{{(price-this.$store.state.totalShopPrice)}}</p>
        <router-link tag="p" to="/order" v-else="">去下单</router-link>
      </div>
    </div>
    <!-- 购物车列表 -->
    <div class="shop-list" v-show="isShow">
      <div class="shop-list-title">
        <p class="title-left">已选商品</p>
        <p class="title-right" @click="handleEmpty">清空<i class="iconfont">&#xe613;</i></p>
      </div>
      <div class="shop-list-wrap">
        <div v-for="(item, index) of this.$store.state.menuList" :key="index">
          <div 
            class="list-wrap" 
            v-for="(itm, indx) of item.shopList" 
            :key="indx" 
            v-show="itm.showRec"
          >
            <div class="list-title">
              <span>{{itm.title}}</span>
            </div>
            <div class="list-price">
              <span>￥{{itm.price*itm.shopNum}}</span>
            </div>
            <div class="list-icon">
              <i
                class="el-icon-remove-outline"
                @click="handleDelete(index, indx)"
              ></i>
              <input type="text" class="input" v-model="itm.shopNum">
              <i
                class="el-icon-circle-plus"
                @click="handleAdd(index, indx)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexCar",
    data(){
      return{
        price: 50,
        isShow: false
      }
    },
    methods:{
      toggle(){
       if (this.totalSum != 0) {
         this.isShow = !this.isShow
       } else {
         this.isShow = false
       }
      },
      //清空购物车
      handleEmpty(){
        let data = this.$store.state.menuList
        data.forEach(item => {
          item.shopList.forEach(itm => {
            //把数量清零
            itm.shopNum = 0
            if (itm.shopNum === 0){
              itm.showRec = false
              this.isShow = false
              //把总价也清零
              this.$store.state.totalShopPrice = 0
            }
          })
        })
      },
      //在购物车列表里面的减少
      handleDelete(index, indx) {
        let data = this.$store.state.menuList[index].shopList[indx]
        data.shopNum = Number(data.shopNum)
        data.shopNum -= 1
        //vuex共享数据 修改state
        this.$store.dispatch('changTotalPrice', this.totalShopPrice)
        //当数值为0的时候，则把减号隐藏
        if (data.shopNum === 0){
          data.showRec = false
        }
        if (this.totalSum ===0)
        {
          this.isShow = false
        }
      },
      //在购物车列表里面的添加
      handleAdd(index, indx) {
        let list = this.$store.state.menuList[index].shopList[indx]
        list.showRec = true
        //用来判断那个box的添加点击了
        list.showShop = true
        list.shopNum = Number(list.shopNum)
        list.shopNum += 1
        this.$store.dispatch('changTotalPrice', this.totalShopPrice)
      },
      // handleShade(ev){
      //   if (!this.$refs.msk.contains(ev.target)) {
      //     this.isShow = false;
      //   }
      // }
    },
    computed: {
      //计算商品的总件数
      totalSum() {
        let totalSum = 0
        let data = this.$store.state.menuList
        data.forEach(item => {
          item.shopList.forEach(itm => {
            itm.shopNum = Number(itm.shopNum)
            totalSum += itm.shopNum
          })
        })
        return totalSum
      },
      //购物车列表计算总价
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
  .container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .vaule >>> .el-badge__content.is-fixed{
    position: absolute;
    top: -.1rem;
    right: -.14rem;
  }
  .vaule >>> .el-badge__content{
    background: rgb(255, 109, 0);
    position: absolute;
    bottom: .66rem;
    left: .94rem;
    z-index: 2;
  }
  .shop-car {
    display: flex;
    width: 100%;
    height: .8rem;
    position: fixed;
    bottom: 0px;
    background: #fff;
    border-top: 1px solid rgb(204, 204, 204);
    z-index: 2;
  }

  .car-icon {
    width: 1.3rem;
  }

  .icon {
    background: rgb(204, 204, 204);
    width: .8rem;
    height: .8rem;
    display: inline-block;
    border-radius: 50%;
    position: relative;
    bottom: .14rem;
    left: .3rem;
    line-height: .8rem;
    text-align: center;
    font-size: .36rem;
    color: #fff;
    border: 1px solid rgb(204, 204, 204);
    overflow: hidden;
  }

  .iconCar{
    background: rgb(255,237,233);
    color: rgb(255, 109, 0);
    border: 1px solid rgb(255, 109, 0);
  }
  .car-price {
    width: 4.1rem;
    line-height: .8rem;
    font-size: .32rem;
  }

  .car-text {
    flex: 1;
    background: rgb(204, 204, 204);
    text-align: center;
    line-height: .8rem;
    color: #fff;
  }
  .carText{
    background: rgb(255, 109, 0);
  }
  .shop-list{
    position: absolute;
    bottom: .82rem;
    width: 100%;
    overflow: hidden;
  }
  .shop-list-title{
    display: flex;
    background: rgb(248, 248, 248);
    width: 100%;
    height: .48rem;
    line-height: .48rem;
    font-size: .24rem;
  }
  .title-left{
    width: 50%;
    color: #666;
    padding-left: .24rem;
  }
  .title-right{
    flex: 1;
    color: #999;
    display: flex;
    flex-direction: row-reverse;
    padding-right: .24rem;
  }
  .title-right i{
    font-size: .24rem;
    padding-right: .1rem;
  }
  .shop-list-wrap{
    max-height: 4rem;
    background: #fff;
  }
  .list-wrap{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    border-top: 1px solid rgb(204, 204, 204);
  }
  .list-title{
    width: 3rem;
    color: #333;
    margin-left: .24rem;
  }
  .list-price{
    flex: 1;
    color: #333;
  }
  .list-icon{
    width: 1.9rem;
  }
  .list-icon i{
    text-align: center;
    line-height: 1rem;
    font-size: .44rem;
    color: rgb(255, 99, 54);
  }
  .input{
    width: .6rem;
    text-align: center;
    position: relative;
    bottom: .1rem;
  }
</style>
