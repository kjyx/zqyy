<template>
  <div class="about-case">
    <div class="w">
      <div class="about-case_box">
        <div class="about-case_left">
          <div class="about_left color">
            <h1>COMPANY<br>PROFILE</h1>
            <p>公司案例</p>
          </div>
        </div>
        <div class="about-case_right">
          <ul>
            <li v-for="item in CaseList" :key="item.id" @click="getCaseInfo(item.id)">
              <div class="image">
                <img :src=item.pic alt="">
              </div>
              <div class="casetext">
                <div class="text">
                  <p>{{item.caseTitle}}</p>
                  <hr>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import caseDateil from '@/mixin/caseDetail'
export default {
  name: "CompanyProfile",
  mixins: [caseDateil],
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    getCaseInfo(id){
      this.$router.push({path:`/casedetails/${id}`})
      this.$emit('Reimport')
    },
  },
  computed: {

  }
}
</script>

<style scoped lang="less">
.w {
  width: 1700px;
  margin: 0 auto;
  padding-left: 60px;
  height: 100%;
}

.about-case {
  width: 100%;
  height: 650px;
  //background-color: pink;
  margin-bottom: 130px;

  .about-case_box {
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .about-case_left {
      width: 470px;
      height: 100%;
      //background-color: #342f2f;
      background: url("~@/assets/anlibeijing.jpg");

      .about_left {
        width: 290px;
        height: 100%;
        padding-left: 50px;
        //background-color: green;
        margin-top: 70px;

        h1 {
          font-size: 45px;
          letter-spacing: 3px;
          font-weight: 500;
        }

        p {
          padding-top: 20px;
          font-size: 15px;
          font-weight: 800;
        }
      }

      .color {
        color: white;
      }
    }

    .about-case_right {
      width: 1228px;
      height: 100%;
      //background-color: skyblue;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        height: 100%;

        li {
          position: relative;
          width: 408px;
          height: 324px;
          background-color: pink;
          cursor: pointer;
          .image{
            width: 100%;
            height: 100%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              transition: all .6s;
            }
          }
          .casetext{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 30px 30px;
            box-sizing: border-box;
            background-color: rgba(0,0,0,0.4);
            .text{
              position: absolute;
              bottom: 30px;
              color: white;
              p{
                font-size: 16px;
                padding-bottom: 5px;
              }
              hr{
                width: 40%;
                height: 1px;
                margin: 10px 0;
                border-radius: 2px;
                transition: width .6s;
                color: white;
                background-color: #fff;
              }
            }
            &:hover{
              hr{
                width: 100%;
              }
            }
          }
          &:hover{
            .casetext{
              background-color: rgba(0,0,0,0);
            }
            img{
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
}
</style>
