<template>
<div>
  <!--  头部文字-->
  <div class="header">
    <div class="wp">
      <div class="text">
        <h1>融合"平面设计"和"动画设计"，配合幽默诙谐的配音，将产品亮点简明扼要的以充满趣味的动态效果呈现。</h1>
        <h1>多用于产品介绍、政企宣传、科教文卫等领域。</h1>
      </div>
    </div>
  </div>
  <!--  第二部分-->
  <div class="animation">
    <div class="wp">
      <div class="animation-box">
        <div class="animation-left">
          <div class="animation-image">
            <img src="../images/feiji1.jpg" alt="">
          </div>
          <div class="animation-bottom">
            <h1>做实拍还是做动面</h1>
            <p>企业产品以非实体产品为主（互联两、金融、解决方案等）想要展示还没生产建造的产品（制造业、建筑行业等）需要展示产品内部结构及运作原理（制造业、高科技、3C等）想讲的内容太多，拍摄成本太高（课程讲解、流程展示等）受众以小孩子为主，不想要太严肃的内容，想更幽默生动</p>
            <el-button type="primary">这些更适合动画</el-button>
          </div>
        </div>
        <div class="animation-right">
          <div class="animation-image">
            <img src="../images/feiji2.jpg" alt="">
          </div>
          <div class="animation-bottom">
            <h1>选择动画公司您有没有这些困扰</h1>
            <p>价格贵，并缺乏明确合理的报价表没有项目定位和策划方案，不知道动面最终效果如何流程混乱，没有对接人，不知道影片制作到什么阶段无售后服务，修片还要另收费</p>
            <el-button type="primary">这些更适合动画</el-button>
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
  name: "animation"
}
</script>

<style lang="less">
.animation{
  width: 100%;
  height: 500px;
  margin-bottom: 150px;
  .wp{
    height: 100%;
    .animation-box{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      //background-color: pink;
      .animation-left,
      .animation-right{
        width: 47%;
        height: 100%;
        box-shadow: 4px 5px 10px 1px rgba(0,0,0,0.1), 0 1px 20px 1px rgba(0,0,0,0.05);
        //background-color: green;
        .animation-image{
          width: 100%;
          height: 50%;
          margin-bottom: 30px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .animation-bottom{
          width: 100%;
          height: 44%;
          h1{
            text-align: center;
            font-size: 20px;
          }
          p{
            padding: 25px 60px;
            font-size: 14px;
            color: #aaa;
            font-weight: 500;
          }
          .el-button{
            width: 200px;
            margin-left: 175px;
          }
          .el-button--primary{
            text-align: center;
            background-color: #fff;
            color: red;
            border: 1px solid red;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
