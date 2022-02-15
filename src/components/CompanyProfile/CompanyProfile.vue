<template>
  <div class="about-case">
    <div class="w">
      <div class="about-case_box">
        <div class="about-case_left">
          <div class="about_left color">
            <h1>COMPANY<br>PROFILE</h1>
            <p>公司案例</p>
          </div>
        </div>
        <div class="about-case_right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyProfile"
}
</script>

<style scoped lang="less">
.w{
  width: 1700px;
  margin: 0 auto;
  padding-left: 60px;
  height: 100%;
}
.about-case{
  width: 100%;
  height: 650px;
  //background-color: pink;
  margin-bottom: 130px;
  .about-case_box{
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .about-case_left{
      width: 470px;
      height: 100%;
      //background-color: #342f2f;
      background: url("~@/assets/anlibeijing.png");
      .about_left{
        width: 290px;
        height: 100%;
        padding-left: 50px;
        //background-color: green;
        margin-top: 70px;
        h1{
          font-size: 45px;
          letter-spacing: 3px;
          font-weight: 500;
        }
        p{
          padding-top: 20px;
          font-size: 15px;
          font-weight: 800;
        }
      }
      .color{
        color: white;
      }
    }
    .about-case_right{
      width: 1228px;
      height: 100%;
      //background-color: skyblue;
      ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        li{
          width: 408px;
          height: 324px;
          background-color: pink;
        }
      }
    }
  }
}
</style>
