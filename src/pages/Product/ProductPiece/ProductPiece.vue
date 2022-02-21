<template>
  <div>
    <!--  头部文字-->
    <div class="header">
      <div class="wp">
        <div class="text">
          <h1>产品宣传是公司对外宣传自身品牌产品的形式之一</h1>
          <h1>将公司的简介、主打产品及优势通过影视手段介绍给客户</h1>
        </div>
      </div>
    </div>
    <!--  第二部分-->
    <div class="ProductPiece2">
      <div class="wp">
        <div class="ProductPiece2-about">
          <ul>
            <li>
              <img src="../images/01.jpg" alt="">
              <p>同类竞品我们的更好却比我们销量高</p>
            </li>
            <li>
              <img src="../images/02.jpg" alt="">
              <p>想推广产品却不知从何下手</p>
            </li>
            <li>
              <img src="../images/03.jpg" alt="">
              <p>向客户介绍产品优势客户总记不住</p>
            </li>
            <li>
              <img src="../images/04.jpg" alt="">
              <p>想拍摄产品片却不知是否有效</p>
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
name: "ProductPiece"
}
</script>

<style lang="less">
.ProductPiece2{
  width: 100%;
  height: 400px;
  //background-color: pink;
  margin-bottom: 150px;
  .wp{
    height: 100%;
    //background-color: green;
    .ProductPiece2-about{
      width: 100%;
      height: 100%;
      ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        width: 100%;
        height: 100%;
        li{
          position: relative;
          width: 49.7%;
          height: 196px;
          //background-color: purple;
          img{
            width: 100%;
            height: 100%;
          }
          p{
            position: absolute;
            top: 70px;
            left: 150px;
            width: 160px;
            //height: 40px;
            font-weight: 800;
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 25px;
          }
          &:nth-child(2n) p{
            position: absolute;
            top: 70px;
            left: 295px;
            width: 160px;
            //height: 40px;
            font-weight: 800;
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 25px;
            text-align: right;
            text-indent: 4em;
          }
        }
      }
    }
  }
}
</style>
