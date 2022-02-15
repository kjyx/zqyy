<template>
  <div class="box">
    <ul>
      <li @click="$router.push({path:'/casedetails'})">
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>中启影业有限公司是中启数智旗下一家多元化11111</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="@/assets/anlibeijing.png" alt="">
        </div>
        <div class="text">
          <p>二维/三位动画</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'casechildren',
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
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    height: 100%;
    li{
      width: 420px;
      height: 400px;
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
    }
  }
}
</style>
