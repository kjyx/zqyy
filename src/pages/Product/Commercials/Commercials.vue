<template>
<div>
  <!--  头部文字-->
  <div class="header">
    <div class="wp">
      <div class="text">
        <h1>营销型宣传片 更懂企业 更懂营销</h1>
        <h1>数十年行业经验，我们更了解如何快速将产品打入受众记忆</h1>
      </div>
    </div>
  </div>
  <!--  第二部分-->
  <div class="commercials2">
    <div class="wp">
      <div class="connercials-box">
        <ul>
          <li>
            <img src="../images/number1.png" alt="" class="image1">
            <p>帮你进行前明定位</p>
            <p>确保影片符合产品营销需求</p>
            <img class="image2" src="../images/commercials-beijing1.jpg" alt="">
            <span class="span1"></span>
            <span class="span2"></span>
          </li>
          <li>
            <img src="../images/number2.png" alt="" class="image1">
            <p>帮你进行前明定位</p>
            <p>确保影片符合产品营销需求</p>
            <img class="image2" src="../images/commercials-beijing2.jpg" alt="">
            <span class="span2"></span>
          </li>
          <li>
            <img src="../images/number3.png" alt="" class="image1">
            <p>帮你进行前明定位</p>
            <p>确保影片符合产品营销需求</p>
            <img class="image2" src="../images/commercials-beijing3.jpg" alt="">
            <span class="span2"></span>
          </li>
          <li>
            <img src="../images/number4.png" alt="" class="image1">
            <p>帮你进行前明定位</p>
            <p>确保影片符合产品营销需求</p>
            <img class="image2" src="../images/commercials-beijing4.jpg" alt="">
            <span class="span2"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--    背景图-->
  <div class="images" style="margin-bottom: 150px">
    <img src="../images/text.png" alt="">
  </div>
  <!--    第三部分-->
  <div class="trailer3">
    <div class="wp">
      <div class="teaile-advantage">
        <ul>
          <li>
            <p>尊重客户</p>
            <span></span>
            <p>尊重每一位客户的需求体验饮成事先做人</p>
          </li>
          <li>
            <p>敬重文化</p>
            <span></span>
            <p>敬重每一份文化的落地生根创新兼顶传承</p>
          </li>
          <li>
            <p>注重细节</p>
            <span></span>
            <p>注重每一次的视听细节感受细节决定成败</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--    第四部分-->
  <div class="trailer4">
    <div class="wp">
      <div class="trailer4-box">
        <div class="left_box">
          <span></span>
        </div>
        <div class="center-text">
          <h1>中启影业</h1>
          <p>做更有价值、更有意义的影像作品生产商</p>
        </div>
        <div class="right_box">
          <span></span>
        </div>
      </div>
    </div>
  </div>
  <!--    第五部分-->
  <div class="trailer5">
    <div class="wp">
      <div class="trailer5-list">
        <ul>
          <li>
            <div class="top-text">
              <p>多维度策略分析</p>
              <p>更加符合受众需求</p>
            </div>
            <div class="top-buttom">
              <p>在制作方案前，先对企业、市场、竞争对手、受众、传播渠道进行分析，制定影片定位策略，确保影片实现客戶需求</p>
              <img src="../images/trailer.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="top-text">
              <p>详细的创意方案</p>
              <p>向客戶承诺，所见即所得</p>
            </div>
            <div class="top-buttom">
              <p>影片创意、影片时长、影片框架、解说词、面面示意均在方案中进行体现，客戶在开拍前即可了解影片最终呈现效果</p>
              <img src="../images/trailer.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="top-text">
              <p>1V1项目经理</p>
              <p>客戶全程只对接一个人</p>
            </div>
            <div class="top-buttom">
              <p>项目经理全程跟踪项目，客戶只需与一人进行对接，避免影片制作流程混乱，互相推卸责任</p>
              <img src="../images/trailer.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="top-text">
              <p>更多增值服务</p>
              <p>真正解决营销推广难题</p>
            </div>
            <div class="top-buttom">
              <p>免费为客戶提供免费多时长版本剪辑;全网主流媒体传播；交片后两年内储存相关数据，并提供3次免费修改</p>
              <img src="../images/trailer.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Commercials"
}
</script>

<style  lang="less">
.wp {
  width: 1300px;
  margin: 0 auto;
}
.header{
  width: 100%;
  height: 60px;
  //background-color: pink;
  margin-bottom: 85px;

  .wp {
    display: flex;
    justify-content: center;
  }

  .text {
    height: 100%;

    h1 {
      text-align: center;
      padding-bottom: 8px;
      letter-spacing: 1px;
    }
  }
}
.trailer3{
  width: 100%;
  height: 110px;
  margin-bottom: 152px;
  //background-color: pink;
  .wp{
    height: 100%;
    .teaile-advantage{
      width: 100%;
      height: 100%;
      //background-color: green;
      ul{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        li{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          width: 282px;
          height: 100%;
          //background-color: purple;
          h1{

          }
          span{
            display: block;
            width: 30px;
            height: 3px;
            margin: 21px 0 41px 0;
            background-color: #E52029;
          }
          p{
            color: #ccc;
            font-size: 15px;
            &:nth-child(1){
              color: black;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

.trailer4{
  width: 100%;
  height: 700px;
  margin-bottom: 120px;
  .wp{
    width: 800px;
    height: 100%;
    .trailer4-box{
      position: relative;
      width: 100%;
      height: 100%;
      //background-color: pink;
      .left_box{
        position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        height: 100%;
        box-sizing: border-box;
        border-radius: 50%;
        border: 3px solid black;
        span{
          position: absolute;
          top: 50%;
          left: -10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          animation: spin 5s infinite linear;
          transform-origin: 358px -2px;
          background-color: black;
        }
      }
      .center-text{
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        h1{
          font-size: 31px;
        }
        p{
          margin-top: 40px;
          font-size: 17px;
          color: #757475;
        }
      }
      .right_box{
        position: absolute;
        top: 0;
        right: 0;
        width: 700px;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
        border: 3px solid red;
        span{
          position: absolute;
          right: -12px;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          animation: spin1 6s infinite linear;
          transform-origin: -340px -0.5px;
          background-color: red;
        }
      }
    }
  }
}

.trailer5{
  width: 100%;
  height: 420px;
  margin-bottom: 200px;
  .wp{
    height: 100%;
    .trailer5-list{
      width: 100%;
      height: 100%;
      //background-color: green;
      ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        li{
          width: 275px;
          height: 100%;
          border: 2px solid #ccc;
          //background-color: pink;
          .top-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50%;
            border-bottom: 2px solid #ccc;
            p{
              &:nth-child(1){
                font-size: 20px;
                font-weight: 900;
                line-height: 50px;
              }
              &:nth-child(2){
                font-size: 21px;
                font-weight: 600;
                color: #5F5D5D;
              }
            }
          }
          .top-buttom{
            p{
              font-size: 14px;
              font-weight: 600;
              padding: 25px 18px;
            }
            img{
              margin-top: 27px;
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@keyframes spin {
  to{
    transform: rotate(1turn)
  }
}

@keyframes spin1 {
  to{
    transform: rotate(-1turn)
  }
}
.commercials2{
  width: 100%;
  height: 360px;
  margin-bottom: 150px;
  .wp{
    height: 100%;
    .connercials-box{
      width: 100%;
      height: 100%;
      //background-color: pink;
      ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        li{
          position: relative;
          width: 300px;
          height: 100%;
          //background-color: green;
          padding: 0 0 0 20px;
          border-right: 1px solid #ccc;
          .image1{
            width: 100px;
            height: 90px;
            //background-color: purple;
            margin-bottom: 15px;
          }
          p{
            width: 300.2px;
            font-size: 16px;
            line-height: 25px;
            &:nth-child(3){
              margin-bottom: 20px;
            }
          }
          .image2{
            width: 100%;
            height: 185px;
            background-color: pink;
          }
          &:nth-child(1){
            border-left: 1px solid #ccc;
          }
          span{
            width: 2px;
            height: 70px;
            background-color: #f7930a;
          }
          .span1{
            position: absolute;
            top: 29%;
            left: -2px;
          }
          .span2{
            position: absolute;
            top: 29%;
            right: -2px;
          }
        }
      }
    }
  }
}
</style>
