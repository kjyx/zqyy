<template>
  <div class="sidebar">
    <div class="menuBtn">
      <ul>
        <li>
          <span @click="$router.push({path:'/home'})">首页</span>
        </li>
        <li @click="$router.push({path:'/product'})">
          <span>产品</span>
        </li>
        <li @click="$router.push({path:'/case'})">
          <span>案例</span>
        </li>
        <li @click="$router.push({path:'/news'})">
          <span>新闻</span>
        </li>
        <li @click="$router.push({path:'/relation'})">
          <span>联系</span>
        </li>
        <li>
          <span>中启影业</span>
        </li>
      </ul>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped lang="less">
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 60px;
    height: 100%;
    background: #fff;
    .menuBtn{
      width: 100%;
      height: 50%;
      padding-top: 150px;
      text-align: center;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-content: center;
        li{
          width: 23px;
          height: 40px;
          text-align: center;
          cursor: pointer;
          span{
            text-align: center;
            //display: block;
            width: 23px;
            font-size: 15px;
          }
          &:hover{
            color: red;
          }
        }
      }
    }
    .bottom{
      width: 100%;
      height: 50%;
      background-color: #c6b198;
      margin-top: 80px;
    }
  }
</style>
