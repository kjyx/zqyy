<template>
<div>
<!--  关于-->
  <insidepageheader></insidepageheader>

  <div class="about_case">
    <div class="w">
      <div class="about_video"></div>
    </div>
  </div>
<!--  公司简介-->
  <div class="box-Company">
    <div class="w">
      <div class="Company_box">
        <div class="Company_left">
          <h1>COMPANY<br>PROFILE</h1>
          <p>公司简介</p>
        </div>
        <div class="Company_center">
          <div class="text">
            <p>中启影业有限公司是中启数智旗下一家多元化、立体式的影视传媒公司。公司提供电影、电视剧、微
              电影、品牌宣传片、企业形象片的拍摄制作与动画制作。在“做更有意义的影像作品，为品牌传递价
              值”企业使命感召下，中启影业将建设成具有卓越竞争力和创新成长力的影视企业，在影视宣传方
              面站好自己岗位，不断深耕可视化内容，品牌宣传等，为企业创造价值做努力，中启影业做更有价
              值、更有意义的影像作品生产商。</p>
          </div>
        </div>
        <div class="Company_right"></div>
      </div>
    </div>
  </div>
<!--  滚动数字-->
  <div class="data-list">
    <div class="w">
      <ul>
        <li v-for="(item,index) in middle_left_leftCont" :key="index">
          <div class="datalist">
            <animate-number from="0" :to="item.num" duration="10000" class="h1"></animate-number>
            <span>{{item.name}}</span>
          </div>
          <p>{{item.msg}}</p>
        </li>
      </ul>
    </div>
  </div>
<!--  公司案例-->
  <CompanyProfile></CompanyProfile>
</div>
</template>

<script>
import mixin from '@/mixin/mixin'
export default {
  name: "about",
  mixins:[mixin],
}
</script>

<style scoped lang="less">
.about_case{
  width: 100%;
  height: 715px;
  margin-bottom: 100px;
  .about_video{
    width: 100%;
    height: 100%;
    background-color: black;
  }
}

.box-Company{
  width: 100%;
  height: 580px;
  margin-bottom: 140px;
  .Company_box{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .Company_left{
    margin-top: 0;
  }
  .Company_center{
    display: flex;
    align-items: center;
    width: 730px;
    height: 100%;
    //background-color: purple;
    background: url("~@/assets/jianjie.png") no-repeat;
    p{
      font-size: 16px;
      font-weight: 550;
      line-height: 30px;
      letter-spacing: 1px;
    }
  }
  .Company_right{
  width: 425px;
  height: 100%;
  background-color: black;
    }
}

.Company_left{
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

.data-list{
  width: 100%;
  height: 230px;
  margin-bottom: 100px;
  //background-color: pink;
  ul{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    //background-color: green;
    li{
      flex: 1;
      text-align: center;
      //background-color: red;
      .datalist{
        .h1{
          font-size: 75px;
          font-weight: 600;
        }
        span{
          font-size: 60px;
          font-weight: 600;
        }
      }
      p{
        color: #959595;
        font-size: 16px;
      }
    }
  }
}


</style>
