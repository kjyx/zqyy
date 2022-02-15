<template>
  <div class="sidebar">
    <div class="button" @click="drawer = true"></div>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        size='100%'
        custom-class="drawer"
    >
<!--      暂时不写东西-->
      <span>我来啦!</span>
    </el-drawer>
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
        <li @click="$router.push({path:'/about'})">
          <span>中启影业</span>
        </li>
      </ul>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return{
      drawer: false,
      direction:"ltr",
    }
  }
}
</script>

<style  lang="less">
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 60px;
    height: 100%;
    background: #fff;
    .button{
      width: 100%;
      height: 10%;
      background-color: pink;
      margin-top: 100px;
    }
    .menuBtn{
      width: 100%;
      height: 50%;
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
  .el-drawer{
    background-color: rgba(0,0,0,0.7) !important;
  }
</style>
