<template>
  <footer>
    <div class="w">
      <div class="footer-box">
        <div class="footer_center">
          <div class="footer-left">
            <div class="logo">
              <img src="@/assets/LOGO2.png" alt="">
            </div>
            <div class="tubiao">
              <el-popover
                  placement="top"
                  width="40"
                  trigger="click">
                <div class="weixin" slot="reference">
                  <img src="@/assets/01.png" alt="">
                </div>
                <img src="@/assets/erweima.jpg" alt="" style="width: 150px;">
              </el-popover>

              <el-popover
                  placement="top"
                  width="40"
                  trigger="click">
                <div class="qq" slot="reference">
                  <img src="@/assets/02.png" alt="">
                </div>
                <img src="@/assets/erweima.jpg" alt="" style="width: 150px;">
              </el-popover>
            </div>
          </div>
          <div class="footer-right_box">
            <div class="footer-right">
              <div class="about">
                <h1>关于我们</h1>
              </div>
              <div class="business">
                <h1>业务领域</h1>
                <ul>
                  <li>业务领域</li>
                  <li>业务领域</li>
                  <li>业务领域</li>
                  <li>业务领域</li>
                  <li>业务领域</li>
                </ul>
              </div>
              <div class="anli-xinwen-lianxi">
                <h1>合作案例</h1>
                <h1>新闻中心</h1>
                <h1>联系我们</h1>
              </div>
            </div>
            <div class="copyright">
              <p>版权所有@中启数值 备案号xxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped lang="less">
footer{
  width: 100%;
  height: 590px;
  //background-color: pink;
  border-top: 1px solid #6e6d6d;
  .footer-box{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    //background-color: pink;
    .footer_center{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 370px;
      //background-color: green;
      .footer-left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logo{
          width: 266px;
          height: 78px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .tubiao{
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100px;
          height: 40px;
          //background-color: skyblue;
          span{
            display: inline-block;
            width: 40px;
          }
          .weixin{
            width: 40px;
            height: 100%;
          }
          .qq{
            width: 40px;
            height: 100%;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .footer-right_box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 650px;
        .footer-right{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 650px;
          height: 330px;
          //background-color: mediumpurple;
          border-bottom: 1px solid #e0e2e1;
          .about{
            flex: 1;
            text-align: center;
          }
          .business{
            flex: 1;
            text-align: center;
            //background-color: pink;
            ul{
              li{
                font-size: 15px;
                line-height: 30px;
              }
            }
          }
          .anli-xinwen-lianxi{
            flex: 1;
            text-align: center;
          }
          h1{
            line-height: 40px;
            font-size: 25px;
            margin-bottom: 10px;
          }
        }
        .copyright{
          color: #b6b6b6;
          p{
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
