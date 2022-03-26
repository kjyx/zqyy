<template>
  <div class="sidebar">
    <div class="button" @click="drawer = true">
      <img src="./images/anniu.png" alt="">
    </div>
    <el-drawer :visible.sync="drawer" :direction="direction" size='100%' custom-class="drawer">
      <div class="box-nav">
        <ul>
          <li>
            <div class="text" @click="$router.push({path:'/'});drawer=false">
              <p>回到首页</p>
              <span>Back to first page</span>
            </div>
          </li>
          <li>
            <div class="text" @click="$router.push({path:'/about'});drawer=false">
              <p>关于我们</p>
              <span>ABOUT US</span>
            </div>
          </li>
          <li>
            <div class="text" @click="$router.push({path:'/case'});drawer=false">
              <p>案例中心</p>
              <span>Our Case</span>
            </div>
          </li>
          <li>
            <div class="text" @click="$router.push({path:'/product'});drawer=false">
              <p>产品中心</p>
              <span>Product Center</span>
            </div>
          </li>
          <li>
            <div class="text" @click="$router.push({path:'/news'});drawer=false">
              <p>新闻中心</p>
              <span>NEWS</span>
            </div>
          </li>
          <li>
            <div class="text" @click="$router.push({path:'/relation'});drawer=false">
              <p>联系我们</p>
              <span>Contact US</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="image-nav">
        <img src="./images/beijingtext.png" alt="">
      </div>
    </el-drawer>
    <div class="menuBtn">
      <ul ref="ul">
        <li>
          <span @click="$router.push({path:'/home'})">首页</span>
        </li>
        <li @click="$router.push({path:'/product'})">
          <span>产品</span>
        </li>
        <li @click="$router.push({path:'/case'})">
          <span>案例</span>
        </li>
        <li @click="$router.push({path:'/news'})">
          <span>新闻</span>
        </li>
        <li @click="$router.push({path:'/relation'})">
          <span>联系</span>
        </li>
        <li @click="$router.push({path:'/about'})">
          <span>中启影业</span>
        </li>
      </ul>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      drawer: false,
      direction: "ltr",
    }
  },
  mounted() {
    // 获取ul的子节点
    let ul = this.$refs.ul.children
    // 吧为数组转化为数组
    let li = Array.from(ul)
    li.forEach((item)=>{
      item.addEventListener('click',()=>{
        li.forEach(item=>{
          item.style.color =''
        })
        item.style.color = 'red'
      })
    })
  }
}
</script>

<style lang="less">
.red{
  color: red;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 60px;
  height: 100%;
  background: #fff;

  .button {
    width: 40%;
    //background-color: pink;
    margin: 100px auto 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .menuBtn {
    width: 100%;
    height: 50%;
    text-align: center;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-content: center;

      li {
        width: 23px;
        height: 40px;
        text-align: center;
        cursor: pointer;

        span {
          text-align: center;
          //display: block;
          width: 23px;
          font-size: 15px;
        }

        &:hover {
          color: red;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: 50%;
    background-color: #c6b198;
    margin-top: 80px;
  }
}

.el-drawer {
  background-color: rgba(51, 44, 43) !important;
}

.el-drawer__header {
  padding: 100px 130px 0 !important;
}

.el-drawer__close-btn {
  font-size: 40px !important;
}

.el-drawer__body {
  position: relative;
}

.box-nav {
  width: 100%;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 400px;
    margin-top: 50px;
    //background-color: green;
    li {
      display: flex;
      align-items: center;
      width: 200px;
      height: 100%;
      //background-color: pink;
      .text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100px;
        color: #fff;
        cursor: pointer;

        p {
          font-size: 25px;
          font-weight: 600;
          padding-bottom: 10px;
        }

        span {
        }
      }
    }
  }
}

.image-nav {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
