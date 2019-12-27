<template>
    <div class="container">
      <div class="nav">
        <router-link tag="i" to="/" class="el-icon-arrow-left icon-left"></router-link>
        <span class="nav-mine">我的</span>
      </div>
      <div class="head">
        <div class="head-user">
          <div class="user-img">
            <img src="@/../static/image/actor.jpg" alt="">
          </div>
          <div class="user-name">
            <span>俊小子</span>
          </div>
        </div>
        <div class="head-car">
          <div class="car-img">
            <img src="@/../static/image/head.png" alt="">
          </div>
          <div class="car-text">
            <p>鼎泰丰</p>
            <p class="text-desc">开卡即送新人礼代金券20元</p>
          </div>
          <div class="get-car">
            <span>立即领卡</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="container-wrap">
        <div class="property">
          <div class="property-box">
            <p class="box-num">0</p>
            <p>资产</p>
          </div>
          <div class="property-box">
            <p class="box-num">0</p>
            <p>积分</p>
          </div>
          <div class="property-box">
            <p class="box-num">0</p>
            <p>优惠券</p>
          </div>
        </div>
        <div class="member">
          <div class="member-img">
            <img src="@/../static/image/mine.png" alt="">
          </div>
          <div class="member-text">
            <p>会员充值</p>
          </div>
          <div class="member-num">
            <span>充1000元，送1500...</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="activity">
          <div class="activity-head">
            <p>活动中心</p>
          </div>
          <div class="activity-wrap">
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon1.png" alt="">
              </div>
              <div class="activity-text">
                <p>消费有礼</p>
              </div>
            </div>
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon2.png" alt="">
              </div>
              <div class="activity-text">
                <p>升级有礼</p>
              </div>
            </div>
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon3.png" alt="">
              </div>
              <div class="activity-text">
                <p>我的砍价</p>
              </div>
            </div>
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon4.png" alt="">
              </div>
              <div class="activity-text">
                <p>我的拼团</p>
              </div>
            </div>
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon5.png" alt="">
              </div>
              <div class="activity-text">
                <p>积分商城</p>
              </div>
            </div>
            <div class="activity-box">
              <div class="activity-img">
                <img src="@/../static/image/icon6.png" alt="">
              </div>
              <div class="activity-text">
                <p>礼品卡</p>
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
            :class="{footStyle: isShowStyle}"
          >
            订单
          </router-link>
          <router-link
            tag="p"
            to="/home"
            class="foot-style"
            @click="hanleStyle"
            :class="{footStyle: !isShowStyle}"
          >
            我的
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMine",
        data(){
          return{
            isShowStyle: true
          }
        },
        methods: {
          hanleStyle(){
            this.isShowStyle = !this.isShowStyle
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
  .nav-mine{
    padding-left: .2rem;
    color: #333;
  }
  .head{
    height: 3.5rem;
    width: 100%;
    background: rgb(243,67,26);
  }
  .head-user{
    display: flex;
    height: 1.2rem;
    padding-left: .34rem;
    padding-top: .3rem;
  }
  .user-img{
    width: 1.2rem;
    height: 1.2rem;
  }
  .user-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .user-name{
    line-height: 1.2rem;
    font-size: .3rem;
    padding-left: .3rem;
    color: #fff;
  }
  .head-car{
    display: flex;
    height: 1.7rem;
    background: rgb(64,56,54);
    margin: .3rem .24rem 0 .24rem;
    border-radius: .2rem;
    color: rgb(192, 164, 125);
    font-size: .24rem;
  }
  .car-img{
    height: .8rem;
    width: .8rem;
    padding-left: .38rem;
    padding-top: .3rem;
  }
  .car-img img{
    width: 100%;
    height: 100%;
  }
  .car-text{
    width: 3.5rem;
    padding-left: .3rem;
    padding-top: .3rem;
  }
  .text-desc{
    padding-top: .2rem;
  }
  .get-car{
    width: 1.6rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    color: #fff;
    background: rgb(207, 168, 109);
    border-radius: 1rem;
    font-size: .22rem;
    margin-left: .2rem;
    margin-top: .5rem;
  }
  .container-wrap{
    background: rgb(248, 248, 248);
    height: 8.83rem;
    overflow: hidden;
  }
  .property{
    display: flex;
    height: 1.7rem;
    justify-content: space-around;
    background: #fff;
    margin-left: .24rem;
    margin-right: .24rem;
    margin-top: 0.3rem;
    align-items: center;
  }
  .property-box{
    width: 1rem;
    text-align: center;
    font-size: .24rem;
    line-height: 0.4rem;
    color: #666;
  }
  .box-num{
    color: #333;
    font-size: .32rem;
  }
  .member{
    display: flex;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
    margin-top: .2rem;
    margin-left: .24rem;
    margin-right: .24rem;
  }
  .member-img{
    width: .37rem;
    height: .37rem;
    padding-left: .3rem;
  }
  .member-img img{
    width: 100%;
    height: 100%;
  }
  .member-text{
    width: 3rem;
    font-size: 0.3rem;
    padding-left: .3rem;
  }
  .member-num{
    color: #999;
    font-size: .24rem;
    padding-left: .4rem;
  }
  .activity{
    height: 3.5rem;
    background: #fff;
    margin-top: .2rem;
    margin-left: .24rem;
    margin-right: .24rem;
  }
  .activity-head{
    height: .7rem;
    margin-left: .3rem;
    margin-right: .3rem;
    line-height: .7rem;
    font-size: .3rem;
    border-bottom: 1px solid #dcdcdc;
  }
  .activity-wrap{
    display: flex;
    flex-wrap: wrap;
    height: 2.3rem;
    padding-top: .2rem;
  }
  .activity-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    height: 1.1rem;
    text-align: center;
    padding-bottom: .14rem;
  }
  .activity-img{
    width: 100%;
    height: .4rem;
    padding-bottom: .2rem;
  }
  .activity-img img{
    width: 25%;
    height: 100%;
  }
  .activity-text{
    font-size: .24rem;
    color: #666;
    padding-left: .1rem;
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
</style>
