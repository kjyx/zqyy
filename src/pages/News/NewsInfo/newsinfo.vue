<template>
  <div>
    <!--  关于-->
    <insidepageheader></insidepageheader>
<!--    标题-->
    <div class="title-box">
      <div class="w">
        <div class="title">
          <span>{{filters.formatTimer(newsDetails.createTime)}}</span>
          <div class="title-center">
            <div class="title-left">
              <p>{{newsDetails.newsTitle}}</p>
            </div>
            <div class="title-img">
              <img src="@/assets/xiaolian.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    内容-->
    <div class="content-box">
      <div class="w">
        <div class="content">
          <div class="content-text">
            <p v-html="newsDetails.newsContent"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="function">
      <div class="w">
        <div class="function-top">
          <span class="iconfont icon-jiantou" @click="$router.push({path:'/news'})">Next</span>
        </div>
        <div class="function-buttom">
          <span @click="$router.go(-1)">BACK</span>
        </div>
      </div>
    </div>
<!--    footer-->
    <footer @click="$router.push({path:'/case'})">
        <img src="@/assets/newsFooter.png" alt="">
    </footer>
  </div>
</template>

<script>
import {getNewsInfo} from "@/api";

export default {
  name: "NewsInfo",
  data(){
    return{
      // 存储新闻详情数据
      newsDetails:[],
      // 时间格式化
      filters: {
        formatTimer:(value)=> {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + MM + "-" + d;
        }
      },
    }
  },
  mounted() {
    this.getNewsDetails()
  },
  methods:{
    async getNewsDetails(){
     const result = await getNewsInfo(this.$route.params.newsid)
      if(result.code === 200){
        this.newsDetails = result.data
      }
    }
  }
}
</script>

<style scoped lang="less">
.title-box{
  width: 100%;
  height: 200px;
  margin-bottom: 170px;
  //background-color: pink;
  .title{
    width: 100%;
    height: 100%;
    //background-color: green;
    border-bottom: 2px solid #ccc;
    span{
      font-size: 15px;
      color: #828182;
    }
    .title-center{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      width: 100%;
      height: 100px;
      //background-color: red;
      .title-left{
        p{
          font-size: 30px;
        }
      }
      .title-img{
        width: 50px;
        height: 50px;
        margin-right: 40px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.content-box{
  width: 100%;
  min-height: 300px;
  //background-color: pink;
  margin-bottom: 80px;
  .content{
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 300px;
    border-bottom: 2px solid #ccc;
    //background-color: green;
    .content-text{
      width: 80%;
      p{
        font-size: 15px;
        line-height: 30px;
        padding-bottom: 170px;
      }
    }
  }
}
.function{
  position: relative;
  width: 100%;
  height: 300px;
  //background-color: pink;
  .function-top{
    span{
      cursor: pointer;
      font-size: 20px;
    }
  }
  .function-buttom{
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    background-color: black;
    cursor: pointer;
    span{
      display: inline-block;
      line-height: 80px;
      font-size: 18px;
      color: white;
    }
  }
}
footer{
  width: 100%;
  height: 600px;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
