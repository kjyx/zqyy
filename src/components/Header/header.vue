<template>
  <header class="headerBg" ref="top">
    <div class="w">
      <div class="header">
        <div class="logo">
          <a href="" >
            <img :src="logo"/>
          </a>
        </div>
        <div class="search" ref="text">
          <p>做更有价值,更有意义的影像作品生产商</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      logo:require('@/assets/LOGO1.png')
    }
  },
  // 监听路由变化切换图片
  watch:{
    $route:{
      handler(to){
        const text = this.$refs.text
        const top = this.$refs.top
        if(to.path !== '/home'){
          this.logo = require('@/assets/LOGO2.png')
          text.style.color = `#747474`
          top.style.position = 'relative'
        }else {
          this.logo = require('@/assets/LOGO1.png')
          text.style.color = '#c8c8c8'
          top.style.position = 'fixed'
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.color{
  color: #fff;
}
.headerBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 35px;
  width: 100%;
  margin-bottom: 60px;
  .w {
    width: 1700px;
    margin: 0 auto;

    .header {
      display: flex;
      justify-content: space-between;

      .logo {
        width: 170px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .search {
      p {
        font-size: 15px;
        line-height: 50px;
      }
    }
    }
  }
}
</style>
