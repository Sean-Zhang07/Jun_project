<template>
    <div class="container">
      <div class="header">
        <i class="iconfont location">&#xe667;</i>
        <span class="text">广西北海市海城区驿马街道快乐辅导</span>
        <i class="el-icon-caret-bottom caret"></i>
      </div>
      <div class="title">
        <div class="title-img">
          <img src="@/../static/image/head.png" alt="">
        </div>
        <div class="title-text">
          <div>
            <span class="store-name">北京鼎泰丰（渔阳店）</span>
          </div>
          <div>
            <span>起送价 ￥50</span>
            <span class="parting-line">|</span>
            <span>配送费 ￥12起</span>
          </div>
          <div>
            <span>公告:满150元免运费</span>
          </div>
        </div>
        <div class="title-handover">
          <p>切换</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHead",
    }
</script>

<style scoped>
  .header{
    height: 1rem;
    line-height: 1rem;
    padding-left: .3rem;
  }
  .location{
    font-size: .28rem;
  }
  .text{
    font-size: .26rem;
    padding-left: .02rem;
  }
  .caret{
    color: rgb(255, 99,54);
  }
  .title{
    display: flex;
    height: 1.8rem;
    background: rgb(85, 5, 10);
  }
  .title-img{
    height: 1.2rem;
    width: 1.2rem;
    padding-left: .3rem;
    padding-top: .3rem;
  }
  .title-img img{
    width: 100%;
    height: 100%;
  }
  .title-text{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: .2rem;
    font-size: .20rem;
    color: #fff;
  }
  .store-name{
    font-size: .28rem;
  }
  .parting-line{
    padding: 0 .1rem;
  }
  .title-handover{
    width: 1.5rem;
  }
  .title-handover p{
    height: .4rem;
    width: .72rem;
    text-align: center;
    line-height: .4rem;
    background: rgb(120, 55, 59);
    color: #fff;
    font-size: .2rem;
    margin-left: .5rem;
    margin-top: .3rem;
  }

</style>
