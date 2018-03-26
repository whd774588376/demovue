<template>
  <div class="head">
     <div class="content">
       <div class="logo inline">
         <img src="../assets/logo.jpg" alt="">
       </div>
       <div class="left inline">
         <div class="title">
           <span class="brand"></span>
           <span class="name">粥品香坊 ( 大运村 )</span>
         </div>
         <div class="description">
           <span>蜂鸟专送 / 38分钟送达</span>
         </div>
         <div class="support">
           <span class="icon inline"></span>
           <span class="text">在线支付满28减5 , 满50减10</span>
         </div>
       </div>
       <div class="support-count" @click="showDetail">
         <span>5个</span>
         <i class="el-icon-arrow-right"></i>
       </div>
     </div>
     <div class="bottom" @click="showDetail">
       <span class="bulletin inline"></span>
       <span class="message">我水电费看见地方阿斯蒂芬斯蒂芬大师傅阿斯蒂芬即可速度快发货卡收到回复可是看到付款斯蒂芬可是对方卡萨丁房卡士大夫卡士达粉卡士达粉卡萨丁焚枯食淡防守打法斯蒂芬斯蒂芬阿斯蒂芬斯蒂芬</span>
       <i class="bottom-right el-icon-arrow-right"></i>
     </div>
     <div class="background">
       <img src="../assets/logo.jpg" alt="">
     </div>
     <transition name="fade">
       <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="title-name">粥品香坊(大运村)</h1>
            <div class="star-wrapper">
              <star :size="48" :score="3"></star>
            </div>
            <div class="title-mes">
              <div class="line"></div>
              <div class="text-mes">优惠信息</div>
              <div class="line"></div>   
            </div>   
          </div>
        </div>
        <div class="detail-close">
         <i class="el-icon-circle-close" @click="hideDetail"></i>
        </div>
       </div>
     </transition>
  </div>
</template>

<script>
import Star from 'components/public/star'
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      detailShow: false
    }
  },
  components: {
    Star
  },
  computed: {},
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>
<style scoped lang="less">
.head {
  position: relative;
  height: 134px;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  .inline {
    display: inline-block;
  }
  .content {
    position: relative;
    height: 106px;
    font-size: 0;
    .logo {
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
        margin: 24px 0 0 24px;
      }
    }
    .left {
      font-size: 12px;
      margin-left: 16px;
      .title {
        margin: 2px 0 5px 0;
        line-height: 26px;
        span {
          display: inline-block;
          height: 26px;
        }
        .brand {
          width: 32px;
          height: 20px;
          vertical-align: top;
          background: url(../assets/brand@2x.png) no-repeat;
          background-size: 100% 100%;
          border-radius: 2px;
          margin:3px 6px 0 0;
        }
        .name {
          font-size: 18px;
          font-weight: 700;
        }
      }     
      .support {
        margin-top: 5px;
        .icon {
          width: 14px;
          height: 14px;
          margin-right: 4px;
          background: url(../assets/decrease_1@3x.png) no-repeat;
          background-size: 100%;
        }
        .text {
          vertical-align: top;
          font-size: 10px;
          color: rgb(255, 255, 255);
          font-weight: 200;
        }
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 12px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      font-size: 10px;
      font-weight: 200;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      cursor: pointer;
    }
  }
  .bottom {
    position: relative;
    cursor: pointer;
    height: 28px;
    line-height: 28px;
    background: rgba(7, 7, 7, 0.2);
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .bulletin {
      width: 24px;
      height: 14px;
      vertical-align: top;
      margin-top: 8px;
      background: url(../assets/bulletin@2x.png) no-repeat;
      background-size: 100%;
      border-radius: 2px;
    }
    .message {
      font-size: 10px;
      color: rgb(255, 255, 255);
      font-weight: 200;
      line-height: 28px;
    }
    .bottom-right {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(3px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .clearfix {
    display: inline-block;
    &:after {
      display: block;
      content: ".";
      height: 0;
      line-height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .detail {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
        .title-name {
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        .star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title-mes {
          display: flex;
          width: 80%;
          margin: 30px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -8px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          }
          .text-mes {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
    height: 100%;
  }
  .fade-enter,
  .fade-leave-to {
    height: 0;
  }
}
</style>