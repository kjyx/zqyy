<template>
  <div class="sidebar">
    <div class="button" @click="drawer = true">
      <img src="./images/anniu.png" alt="">
    </div>
    <el-drawer :visible.sync="drawer" :direction="direction" size='100%' custom-class="drawer">
      <div class="box-nav">
        <ul>
          <li v-for="item in drawerList" :key="item.id"
              @click="handleDrawer(item)">
            <div class="text">
              <p>{{ item.title }}</p>
              <span>{{ item.conent }}</span>
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
        <li v-for="item in pathList" :key="item.id" @click="handlePath(item)">
          <span :style="{color: item.id === current ? 'red': ''}">{{ item.title }}</span>
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
      current: 1,
      drawer: false,
      direction: "ltr",
      pathList: [
        {id: 1, title: '首页', path: '/home'},
        {id: 2, title: '产品', path: '/product'},
        {id: 3, title: '案例', path: '/case'},
        {id: 4, title: '新闻', path: '/news'},
        {id: 5, title: '联系', path: '/relation'},
        {id: 6, title: '中启影业', path: '/about'}
      ],
      drawerList: [
        {id: 1, title: '回到首页', conent: 'Back to first page', path: '/home'},
        {id: 2, title: '产品中心', conent: 'ABOUT US', path: '/product'},
        {id: 3, title: '案例中心', conent: 'Our Case', path: '/case'},
        {id: 4, title: '新闻中心', conent: 'Product Center', path: '/news'},
        {id: 5, title: '联系我们', conent: 'NEWS', path: '/relation'},
        {id: 6, title: '中启影业', conent: 'Contact US', path: '/about'}
      ]
    }
  },
  mounted() {
    this.current = Number(sessionStorage.getItem('current')) || 1
  },
  methods: {
    handlePath(item) {
      this.$router.push({path: item.path})
      this.current = item.id
      sessionStorage.setItem('current', item.id)
    },
    handleDrawer(item) {
      this.$router.push({path: item.path});
      this.drawer = false;
      this.current = item.id
      sessionStorage.setItem('current', item.id)
    }

  }
}
</script>

<style lang="less">
.red {
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
