<template>
  <div class="trailerBox">
    <!--  头部文字-->
    <div class="header">
      <div class="wp">
        <div class="text">
          <h1>企业形象片是运用现在时或过去时的电视纪实手法，</h1>
          <h1>对企业的整体形象，如发展历程、企业管理、技术实力等各个方面，给予集中而深入的展示。</h1>
        </div>
      </div>
    </div>
    <!--  第二部分-->
    <div class="imageSlices2">
      <div class="wp">
        <div class="imageSlices2-list">
          <ul>
            <li>
              <div class="imageSlices2-list_left"></div>
              <div class="imageSlices2-list_right">
                <p>费用低：一般5分钟的企业介绍专题片或3分钟产品推介专题片只需摄制费2-10万元，比较几十万元乃至上百万的广告片制作投入要节省许多经费。且播出费亦比硬性广告片便宜许多。</p>
              </div>
            </li>
            <li>
              <div class="imageSlices2-list_left"></div>
              <div class="imageSlices2-list_right">
                <p>信息量大：一条15秒的广告片只能诉求单一的信息，而一部形象片却能根据具体内容，任意长度，将需要告诉受众的和盘托出，使之对自身企业状况或者产品特性、功能、机理及使用方法得以较全面、较清晰的展示，有助于树立良好的企业形象或品牌亲和力。</p>
              </div>
            </li>
            <li>
              <div class="imageSlices2-list_left"></div>
              <div class="imageSlices2-list_right">
                <p>方便有效：有了企业介绍或产品推介专题片，企业领导和营销人员再不用反复向经销商或直接客戶作不厌其烦的介绍了；由于专题片诉求详尽，又能加进用戶的反馈态度与功效对比，例如景点旅游、减肥产品、美容产品、医疗器械，健身器材等产品推介片，可有效地唤起受众的购买欲。</p>
              </div>
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
    <div class="imageSlices4">
      <div class="wp">
        <div class="imageSlices4-left public">
          <span></span>
        </div>
        <div class="imageSlices4-center">
          <h1>中启影业</h1>
          <p>做更有价值、更有意义的影像作品生产商</p>
        </div>
        <div class="imageSlices4-right public">
          <span></span>
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
  name: "ImageSlices"
}
</script>

<style lang="less">
.imageSlices2{
  width: 100%;
  height: 520px;
  //background-color: pink;
  margin-bottom: 150px;
  .wp{
    height: 100%;
    .imageSlices2-list{
      width: 100%;
      height: 100%;
      ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        //background-color: green;
        li{
          width: 100%;
          height: 150px;
          //background-color: pink;
          box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
          .imageSlices2-list_left{
            float: left;
            width: 40px;
            height: 100%;
            background-color: #e6212a;
          }
          .imageSlices2-list_right{
            float: left;
            display: flex;
            align-items: center;
            width: 86%;
            height: 100%;
            //background-color: pink;
            margin-left: 70px;
            p{
              font-size: 15px;
              line-height: 30px;
              letter-spacing: 1px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}

.imageSlices4{
  width: 100%;
  height: 600px;
  margin-bottom: 150px;
  //background-color: pink;
  .wp{
    position: relative;
    width: 800px;
    height: 100%;
    //background-color: green;
    .public{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 500px;
      box-sizing: border-box;
    }
    .imageSlices4-left{
      transform: translateX(-50%) translateY(-50%) rotateZ(60deg);
      border: 2px solid red;
      span{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 20px;
        height: 20px;
        animation: red 8s infinite linear ;
        background-color: red;
      }
    }
    .imageSlices4-center{
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
    .imageSlices4-right{
      transform: translateX(-50%) translateY(-50%) rotateZ(210deg);
      border: 2px solid black;
      span{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 20px;
        height: 20px;
        animation: black 6s infinite linear ;
        background-color: black;
      }
    }
  }
}

@keyframes red {
  0%{
    top: -10px;
    left: -10px;
  }
  25%{
    top: -10px;
    left: 490px;
  }
  50%{
    top: 488px;
    left: 490px;
  }
  75%{
    top: 490px;
    left: -7px;
  }
  100%{
    top: -10px;
    left: -10px;
}
}
@keyframes black {
  0%{
    top: -10px;
    left: -10px;
  }
  25%{
    top:490px;
    left: -10px;
  }
  50%{
    top:490px;
    left: 490px;
  }
  75%{
    top:-10px;
    left: 490px;
  }
  100%{
    top:-10px;
    left: -10px;
  }
}
</style>
