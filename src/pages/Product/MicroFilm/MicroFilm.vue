<template>
<div>
  <!--  头部文字-->
  <div class="header">
    <div class="wp">
      <div class="text">
        <h1>营销型短视频后短视频时代企业最佳选择</h1>
        <h1>多年行业经验，帮助企业占据用戶碎片化时间</h1>
      </div>
    </div>
  </div>
  <!--  第二部分-->
  <div class="microfilm2">
    <div class="wp">
      <div class="microfilm2-box">
        <div class="microfilm2_top">
          <img src="../images/111.jpg" alt="">
        </div>
        <div class="microfilm2_img">
          <div class="microfilm2-text">
            <p>如今，短视频平台的流量上涨逐渐平缓</p>
            <p>越来越多的企业挤入短视频赛道</p>
            <p>现在已经不是随便做个视频就能火的野蛮生长时代</p>
            <p>短视频需要更丰富的内容，更贴心的服务</p>
            <p>以适用于肚交媒体、电商平台、短视频平台等多种场景</p>
          </div>
        </div>
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
  name: "MicroFilm"
}
</script>

<style lang="less">
.microfilm2{
  width: 100%;
  height: 435px;
  margin-bottom: 150px;
  .wp{
    height: 100%;
    .microfilm2-box{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      //background-color: green;
      .microfilm2_top{
        display: flex;
        width: 300px;
        height: 60px;
        margin: 0 auto 20px auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .microfilm2_img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: url("../images/beijing.jpg") center center / cover no-repeat;
        .microfilm2-text{
          width: 370px;
          height: 180px;
          //background-color: pink;
          text-align: center;
          p{
            color: white;
            font-size: 15px;
            line-height: 33px;
          }
        }
      }
    }
  }
}
</style>
