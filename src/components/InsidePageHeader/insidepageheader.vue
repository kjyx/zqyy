<template>
  <div class="box-about">
    <div class="w">
      <div class="hander-text">
        <div class="title">
          <h1>{{title}}</h1>
          <span></span>
        </div>
        <p>{{titleEnglish}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "insidepageheader",
  data(){
    return{
      title:'',
      titleEnglish:''
    }
  },
  mounted() {
    switch (this.$route.path) {
      case '/about': {
        this.title = '关于我们'
        this.titleEnglish = 'About US'
        break
      }
      case '/relation': {
        this.title = '联系我们'
        this.titleEnglish = 'Contact US'
        break
      }
      case '/news': {
        this.title = '新闻中心'
        this.titleEnglish = 'NEWS'
        break
      }
      case `/newsinfo/${this.$route.params.newsid}`: {
        this.title = '新闻详情'
        this.titleEnglish = 'News Details'
        break
      }
      case `/casedetails/${this.$route.params.id}`: {
        this.title = '案例详情'
        this.titleEnglish = 'Case Details'
        break
      }
    }
    // if (this.$route.path === '/about') {
    //   this.title = '关于我们'
    //   this.titleEnglish = 'About US'
    // }else if(this.$route.path === '/relation'){
    //   this.title = '联系我们'
    //   this.titleEnglish = 'Contact US'
    // }else if(this.$route.path === '/news'){
    //   this.title = '新闻中心'
    //   this.titleEnglish = 'NEWS'
    // }else if(this.$route.path === '/newsinfo'){
    //   this.title = '新闻详情'
    //   this.titleEnglish = 'News Details'
    // }else if(this.$route.path === '/case'){
    //   this.title = '案例中心'
    //   this.titleEnglish = 'Our Case'
    // }else if(this.$route.path === '/casedetails'){
    //   this.title = '案例详情'
    //   this.titleEnglish = 'Case Details'
    // }
  },
}
</script>

<style lang="less">
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
</style>
