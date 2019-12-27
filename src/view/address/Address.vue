<template>
  <div class="container">
    <div class="address-head">
      <router-link tag="i" to="/order" class="el-icon-arrow-left icon-left"></router-link>
      <span class="address-choice">地址选择</span>
    </div>
    <div class="address-box">
      <div class="address-now" v-show="this.$store.state.isShowTemp">
        <p>暂无收获地址，请新增地址</p>
      </div>
      <div v-for="(item, index) of temp" :key="index" class="address-wrap">
        <div class="address-msg">
            <span>{{item.address}}</span>
            <span>{{item.doorPlate}}</span>
        </div>
        <div class="mine-msg">
          <span>{{item.userName}}</span>
          <span>{{item.phoneNum}}</span>
        </div>
        <div class="address-icon">
          <i class="iconfont delete-icon">&#xe613;</i>
          <router-link tag="i" to="/order/address/newaddress" class="el-icon-edit-outline editor-icon"></router-link>
          <i @click="handleAddres(temp)" class="iconfont choise-icon">&#xe66d;</i>
        </div>
      </div>
      <router-link tag="div" to="/order/address/newaddress" class="address-button">
        <p class="button">+新增地址</p>
      </router-link>
    </div>
  </div>

</template>

<script>
    import bus from '@/store/bus'
    export default {
        name: "Address",
        data(){
          return{
            temp: []
          }
        },
        methods:{
          handleAddres(e){
            let addres = e;
            console.log(e)
            this.$router.push({path: '/order',query:{addres}});
          }
        },
        mounted() {
          // this.getAddress()
          // bus.$on('change', (temp)=>{
          //  let temps = {
          //    userName: temp.userName,
          //    phoneNum: temp.phoneNum,
          //    address: temp.address,
          //    doorPlate: temp.doorPlate,
          //  }
          //  this.temp.push(temps)
          // })
          let temp = JSON.parse(localStorage.getItem("address"));
          console.log(temp)
          temp.forEach(item =>{
            let temps = {
              userName: item.userName,
              phoneNum: item.phoneNum,
              address: item.address,
              doorPlate: item.doorPlate,
            }
            this.temp.push(temps)
          })


        }
    }
</script>

<style scoped>
  .address-head{
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
  .address-choice{
    padding-left: .2rem;
    color: #333;
  }
  .address-box{
    width: 100%;
    position: absolute;
    top: 1rem;
    left: 0 ;
    bottom: 0;
    background: rgb(248,248,248);
  }
  .address-now{
    position: absolute;
    top: 5rem;
    left: 2.1rem;
    color: #999;
    font-size: .3rem;
  }
  .address-button{
    width: 100%;
    height: 1rem;
    background: #fff;
    position: absolute;
    bottom: 0;
  }
  .button{
    height: .6rem;
    width: 7rem;
    text-align: center;
    line-height: .6rem;
    margin-top: .2rem;
    background: rgb(255 ,92, 54);
    color: #fff;
    margin-left: .23rem;
    border-radius: .08rem;
  }
  .address-wrap{
    height: 1.6rem;
    background: #fff;
    overflow: hidden;
  }
  .address-msg{
    width: 3.5rem;
    height: .8rem;
    line-height: .4rem;
    padding-left: .8rem;
    color: #999;
  }
  .mine-msg{
    width: 3.5rem;
    line-height: .7rem;
    padding-left: .8rem;
    color: #dcdcdc;
  }
  .address-icon{
    position: relative;
    top: -.9rem;
    left: 5.6rem;
    color: #999;
  }
  .editor-icon{
    font-size: .35rem;
    color: #999;
    padding-left: .5rem;
  }
  .choise-icon{
    position: relative;
    right: 6.7rem;
    font-size: .3rem;
    color: #999;
  }
</style>
