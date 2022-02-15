<template>
<div>
  <!--  关于-->
  <div class="box-about">
    <div class="w">
      <div class="hander-text">
        <div class="title">
          <h1>案例详情</h1>
          <span></span>
        </div>
        <p>Case Details</p>
      </div>
    </div>
  </div>
  <div class="case-details">
    <div class="w">
      <div class="case-video">
        <div class="case-video_left">
          <img src="@/assets/100.png" alt="">
        </div>
        <div class="case-text_right">
          <div class="case-text">
            <div class="text">
              <h1>四五酒业广告片</h1>
              <p>中启影业有限公司是中启数智旗下一家多元化、立体式的影视传媒公司。公司提供电影、电视剧、微 电影、品牌宣传片、企业形象片的拍摄制作与动画制作。在“做更有意义的影像作品，为品牌传递价 值”企业使命感召下，中启影业将建设成具有卓越竞争力和创新成长力的影视企业，在影视宣传方 面站好自己岗位，不断深耕可视化内容，品牌宣传等，为企业创造价值做努力，中启影业做更有价 值、更有意义的影像作品生产商。</p>
            </div>
            <div class="case-button">
              <el-button type="primary" @click="$router.push({path:'/relation'})">喜欢本片 资讯报价</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<CompanyProfile></CompanyProfile>
</div>
</template>

<script>
export default {
  name: "CaseDetails"
}
</script>

<style scoped lang="less">
.box-about{
  width: 100%;
  height: 120px;
  //background-color: pink;
  .hander-text{
    width: 100%;
    height: 70px;
    //background-color: green;
    text-align: center;
    margin-bottom: 30px;
    .title{
      position: relative;
      width: 130px;
      margin: 0 auto;
      h1{
        display: inline-block;
        font-size: 27px;
        font-weight: 550;
        letter-spacing: 4px;
      }
      span{
        position: absolute;
        top: -7px;
        left: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: rgba(230,33,42,0.9);
        z-index: -1;
      }
    }
    p{
      font-size: 20px;
      color: #7b7b7b;
    }
  }
}
.case-details{
  width: 100%;
  height: 600px;
  //background-color: pink;
  margin-bottom: 130px;
  .case-video{
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .case-video_left{
      width: 65%;
      height: 100%;
      //background-color: pink;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .case-text_right{
      width: 35%;
      height: 100%;
      //background-color: purple;
      .case-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 95%;
        height: 100%;
        padding-left: 30px;
        h1{
          font-size: 30px;
        }
        p{
          padding-top: 20px;
          font-size: 15px;
          line-height: 40px;
        }
        .case-button{
          width: 100%;
          height: 40px;
          .el-button--primary{
            width: 100%;
            background-color: red;
            border-color:red ;
          }
        }
      }
    }
  }
}
</style>
