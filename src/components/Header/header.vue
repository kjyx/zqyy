<template>
  <header class="headerBg">
    <div class="w">
      <div class="header">
        <div class="logo">
          <a href="">
            <img src="../../assets/LOGO01.jpg"/>
          </a>
        </div>
        <div class="search">
          <div class="inp">
            <input  type="text" name="" id="" placeholder="SEARCH">
            <span class="el-icon-search"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="less">
.headerBg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  margin-right: 60%;
  padding: 35px 40px;
  width: 100%;
  .w{
    width: 1700px;
    margin: 0 auto;
    .header{
      display: flex;
      justify-content: space-between;
      .logo{
        width: 80px;
        height: 80px;
        img{
          width: 100%;
          height: 100%;
        }
      }
        .inp {
          display: inline-block;
          line-height: 80px;
          input{
            width: 100px;
            height: 100%;
            outline: none;
            background-color: transparent;
            border: 0;
            padding-left: 10px;
            font-weight: 800;
            font-size: 18px;
          }
          span{
            display: inline-block;
            font-size: 20px;
            line-height: 80px;
            //font-weight: 800;
          }
        }
    }
  }
}
</style>
