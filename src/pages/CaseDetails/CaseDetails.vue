<template>
  <div>
    <!--  关于-->
    <insidepageheader></insidepageheader>
    <div class="case-details">
      <div class="w">
        <div class="case-video">
          <div class="case-video_left">
<!--            <img :src=CaseData.pic alt="">-->
            <iframe :src="CaseData.caseVideoUrl" id="ifm" ref="iframe" scrolling="no" allowfullscreen="true" allowtransparency></iframe>
          </div>
          <div class="case-text_right">
            <div class="case-text">
              <div class="text">
                <h1>{{ CaseData.caseTitle }}</h1>
                <p>{{ CaseData.caseBrief }}</p>
              </div>
              <div class="case-button">
                <el-button type="primary" @click="$router.push({path:'/relation'})">喜欢本片 资讯报价</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CompanyProfile @Reimport="Reimport"></CompanyProfile>
  </div>
</template>

<script>
import {getCaseData} from "@/api";
export default {
  name: "CaseDetails",
  data() {
    return {
      CaseData: {}
    }
  },
  mounted() {
    this.caseDetails()
  },
  methods: {
    // 获取案例详情
    async caseDetails() {
      let result = await getCaseData(this.$route.params.id)
      if (result.code === 200) {
        console.log(result)
        this.CaseData = result.data
      }
    },
    // 这里是在案例详情里点击案例需要重新发送请求渲染页面
    Reimport(){
        this.caseDetails()
    },
  },

}
</script>

<style scoped lang="less">
.case-details {
  width: 100%;
  height: 620px;
  //background-color: pink;
  margin-bottom: 130px;

  .case-video {
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .case-video_left {
      width: 65%;
      height: 100%;
      //background-color: pink;
      //img {
      //  width: 100%;
      //  height: 100%;
      //}
         iframe{
           width: 100%;
          height: 100% ;
        }
      }
    }
    .case-text_right {
      width: 35%;
      height: 100%;
      //background-color: purple;
      .case-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 95%;
        height: 100%;
        padding-left: 30px;

        h1 {
          font-size: 30px;
        }

        p {
          padding-top: 20px;
          font-size: 15px;
          line-height: 40px;
        }

        .case-button {
          width: 100%;
          height: 40px;

          .el-button--primary {
            width: 100%;
            background-color: red;
            border-color: red;
          }
        }
      }
    }
  }
</style>
