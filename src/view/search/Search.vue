<template>
    <div class="container">
      <div class="head">
        <router-link tag="i" to="/" class="el-icon-arrow-left head-icon"></router-link>
        <span class="head-search">搜索</span>
      </div>
      <div class="search">
        <div class="search-comt">
          <el-input
            class="search"
            placeholder="请输入菜品、套餐名称..."
            prefix-icon="el-icon-search"
            v-model="keyword"
          >
          </el-input>
        </div>
        <div class="search-desc">
          <span>搜索</span>
        </div>
      </div>
      <div class="search-content">
        <ul v-for="(item, index) of list" :key="index">
          <li>
            <div class="shop-box">
              <div class="shop-img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="shop-text">
                <p class="shop-title">{{item.title}}</p>
                <p class="shop-sale">{{item.sale}}</p>
                <p class="shop-price">￥{{item.price}}</p>
              </div>
              <div class="shop-icon">
                <div class="shopping-icon">
                  <i class="el-icon-circle-plus add-icon"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="search-history">
        <div class="search-history-text">
          <span>历史搜索</span>
        </div>
        <div class="search-history-icon">
          <i class="iconfont">&#xe613;</i>
        </div>
      </div>
      <div class="search-car">
        <index-car></index-car>
      </div>
    </div>
</template>

<script>
    import IndexSearch from '../index/components/Search'
    import IndexCar from '../index/components/Car'
    export default {
        name: "Search",
        components:{
          IndexSearch,
          IndexCar
        },
        data(){
          return{
            keyword:'',
            list: [],
            timer: null
          }
        },
        watch: {
          keyword() {
            if (this.timer)
            {
              clearTimeout(this.timer)
            }
            if (!this.keyword)
            {
              this.list = []
              return
            }
            this.timer = setTimeout( () => {
              let data = this.$store.state.menuList
              const result = []
              data.forEach(item =>{
                item.shopList.forEach(value =>{
                  if (value.title.indexOf(this.keyword) > -1)
                  {
                    result.push(value)
                  }
                })
              })
              this.list = result
            }, 100)
          }
        }
    }
</script>

<style scoped>
  .search >>> .el-input__inner{
    background: rgb(248, 248, 248);
    height: .58rem;
    line-height: .58rem;
    font-size: .24rem;
    border: none;
  }
  .search >>> .el-input__icon{
    font-size: .32rem;
    color: #333;
    font-weight: bold;
    position: absolute;
    top: .04rem;
    left: .28rem;
  }
  .search-comt >>> .el-input{
    width: 92%;
    padding: .2rem .3rem;
  }
  .search{
    width: 100%;
    display: flex;
  }
  .search-comt{
    width: 6rem;
  }
  .search-desc{
    flex: 1;
    text-align: center;
    line-height: .9rem;
    color: rgb(255, 109, 0);
  }
  .head{
    height: .8rem;
    line-height: .8rem;
    width: 90%;
    padding-left: .2rem;
  }
  .head-icon{
    font-size: .32rem;
    color: #333;
  }
  .head-search{
    color: #333;
  }
  .search-history{
    display: flex;
    height: .5rem;
    width: 96%;
    line-height: .5rem;
    padding-top: 0.4rem;
  }
  .search-history-text{
    width: 45%;
    padding-left: .3rem;
    font-size: .24rem;
    color: #999;
  }
  .search-history-icon{
    flex: 1;
    display: flex;
    flex-direction: row-reverse;

  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .shop-box{
    display: flex;
    height: 1.64rem;
    width: 100%;
    margin-left: .2rem;
    padding-top: .24rem;
    border-bottom: 1px solid rgb(204,204,204);
    background: #fff;
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
</style>
