<template>
    <router-link tag="div" to="/search" class="container">
      <el-input
        class="search"
        placeholder="请输入菜品、套餐名称..."
        prefix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
    </router-link>
</template>

<script>
    export default {
        name: "IndexSearch",
        data(){
          return{
            search: ''
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
  .container >>> .el-input{
    width: 92%;
    padding: .2rem .3rem;
  }
</style>
