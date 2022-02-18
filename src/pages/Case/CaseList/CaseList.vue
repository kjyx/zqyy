<template>
  <div class="box">
    <ul>
      <li @click="$router.push({path:`/casedetails/${item.id}`})" v-for="item in caseList" :key="item.id">
        <div class="img">
          <img :src=item.pic alt="">
        </div>
        <div class="text">
          <p>{{item.caseTitle}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'casechildren',
  props:['caseList']
}
</script>

<style scoped lang="less">
.box{
  width: 100%;
  height: 1300px;
  //background-color: pink;
  ul{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    //background-color: pink;
    li{
      width: 400px;
      height: 400px;
      margin-right: 32px;
      margin-bottom: 50px;
      cursor: pointer;
      //background-color: green;
      .img{
        width: 100%;
        height: 320px;
        //background-color: pink;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text{
        width: 100%;
        height: 50px;
        p{
          padding-top: 25px;
          text-align: center;
          font-size: 20px;
          /*强制文字在一行文本框内*/
          white-space: nowrap;
          /*溢出部分文字隐藏*/
          overflow: hidden;
          /*溢出部分省略号处理*/
          text-overflow: ellipsis;
        }
      }
      &:nth-child(4n){
        margin: 0;
      }
    }
  }
}
</style>
