<template>
    <div class="container">
        <div class="newaddress-head">
            <router-link tag="i" to="/order/address" class="el-icon-arrow-left icon-left"></router-link>
            <span class="newaddress-choice">新增地址</span>
        </div>
        <div class="newaddress-box">
            <div class="newaddress-msg">
                <div class="msg-name">
                    <p class="msg-title">联系人</p>
                    <input type="text" class="msg-input" v-model="userName" placeholder="姓名">
                </div>
                <div class="msg-name">
                    <p class="msg-title">电话</p>
                    <input type="text" class="msg-input" v-model="phoneNum" placeholder="手机号码">
                </div>
                <div class="msg-name">
                    <p class="msg-title">地址</p>
                    <input type="text" class="msg-input" v-model="address" placeholder="选择收货地址">
                    <i class="el-icon-arrow-right icon-right"></i>
                </div>
                <div class="msg-door">
                    <p class="msg-title">门牌号</p>
                    <input type="text" class="msg-input" v-model="doorPlate" placeholder="例：6单元606">
                </div>
                <!--<div class="msg-lable">-->
                    <!--<p class="msg-title">标签</p>-->
                    <!--<div class="lable-wrap">-->
                        <!--<p class="lable-box">公司</p>-->
                        <!--<p class="lable-box">家</p>-->
                        <!--<p class="lable-box">学校</p>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <router-link tag="div" to="/order/address" class="newaddress-botton" @click.native="getMsg">
                <p>确定</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    import bus from '@/store/bus'
    export default {
        name: "NewAddress",
        data(){
          return{
            userName: '',
            phoneNum: '',
            address: '',
            doorPlate: '',
          }
        },
        methods: {
          getMsg() {
            let tempArr = []
            let temp ={
              userName: this.userName,
              phoneNum: this.phoneNum,
              address: this.address,
              doorPlate: this.doorPlate,
            }
            tempArr.push(temp)
            // bus.$emit('change', temp)
            localStorage.setItem('address', JSON.stringify(tempArr))
            console.log(localStorage.getItem("address"))
          }
        }
    }
</script>

<style scoped>
  .newaddress-head{
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
  .newaddress-choice{
    padding-left: .2rem;
    color: #333;
  }
  .newaddress-box{
    width: 100%;
    position: absolute;
    top: 1rem;
    left: 0 ;
    bottom: 0;
    background: rgb(248,248,248);
  }
  .newaddress-msg{
    height: 4rem;
    background: #fff;
    margin-top: .2rem;
  }
  .msg-name{
    height: 1rem;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    margin-left: .3rem;
  }
  .msg-title{
    line-height: 1rem;
    color: #999;
    width: 1.3rem;
  }
  .msg-input{
    color: #333;
    width: 5.3rem;
    font-size: .28rem;
  }
  input::-webkit-input-placeholder{
    color:#dcdcdc;
    font-size: .24rem;
  }
  .msg-door{
    height: 1rem;
    display: flex;
    margin-left: .3rem;
  }
  .icon-right{
    display: inline-block;
    line-height: 1rem;
    font-size: .4rem;
    color: #dcdcdc;
  }
  .lable-wrap{
    height: 1rem;
    width: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .lable-box{
    border: 1px solid #dcdcdc;
    width: .8rem;
    height: .4rem;
    font-size: .2rem;
    text-align: center;
    line-height: .4rem;
  }
  .newaddress-botton{
    height: .8rem;
    width: 6rem;
    text-align: center;
    line-height: .8rem;
    margin-top: .8rem;
    background: rgb(255 ,92, 54);
    color: #fff;
    margin-left: .7rem;
    border-radius: .08rem;
  }
</style>
