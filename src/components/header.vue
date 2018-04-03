<template>
  <div class="head">
     <div class="content">
       <div class="logo inline">
         <img src="../assets/logo.jpg" alt="">
       </div>
       <div class="left inline">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           <span>{{seller.description}}</span>
         </div>
         <div class="support" v-if="seller.supports">
           <my-icon :score="seller.supports[0].type" :size="3"></my-icon>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
       </div>
       <div class="support-count" @click="showDetail" v-if="seller.supports">
         <span>{{seller.supports.length}}个</span>
         <i class="el-icon-arrow-right"></i>
       </div>
     </div>
     <div class="bottom" @click="showDetail">
       <span class="bulletin inline"></span>
       <span class="message">{{seller.bulletin}}</span>
       <i class="bottom-right el-icon-arrow-right"></i>
     </div>
     <div class="background">
       <img src="../assets/logo.jpg" alt="">
     </div>
     <transition name="fade">
       <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="title-name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <my-star :size="48" :score="seller.score"></my-star>
            </div>
            <div class="caption">
              <my-caption :caption="captionName"></my-caption>
            </div> 
            <ul class="detail-ul" v-if="seller.supports">
              <li v-for="(item,index) in seller.supports" :key="index" class="detail-li">
                <my-icon :score="item.type" :size="3"></my-icon>
                <span class="text">{{item.description}}</span>
              </li>
            </ul> 
            <div class="caption">
              <my-caption :caption="'商家公告'"></my-caption>
            </div> 
            <div class="detail-bulletion">{{seller.bulletin}}</div>
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
import Caption from 'components/public/caption'
import icon from 'components/public/icon'
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false,
      captionName: "优惠信息"
    }
  },
  components: {
    "my-caption": Caption,
    "my-star": Star,
    "my-icon": icon   
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
  height: 8.375rem;
  color: rgb(255, 255, 255);
  background: rgba(7, 17, 27, 0.5);
  .inline {
    display: inline-block;
  }
  .content {
    position: relative;
    height: 6.625rem;
    font-size: 0;
    .logo {
      img {
        width: 4rem;
        height: 4rem;
        border-radius: .125rem;
        margin: 1.5rem 0 0 1.5rem;
      }
    }
    .left {
      font-size: .75rem;
      margin-left: 1rem;
      .title {
        margin: .125rem 0 .3125rem 0;
        line-height: 1.625rem;
        span {
          display: inline-block;
          height: 1.625rem;
        }
        .brand {
          width: 2rem;
          height: 1.25rem;
          vertical-align: top;
          background: url(../assets/brand@2x.png) no-repeat;
          background-size: 100% 100%;
          border-radius: .125rem;
          margin:.1875rem .375rem 0 0;
        }
        .name {
          font-size: 1.125rem;
          font-weight: 700;
        }
      }     
      .support {
        margin-top: .3125rem;
        .text {
          vertical-align: top;
          font-size: .625rem;
          line-height: .9375rem;
          color: rgb(255, 255, 255);
          font-weight: 200;
        }
      }
    }
    .support-count {
      position: absolute;
      right: .75rem;
      bottom: .75rem;
      padding: 0 .5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      border-radius: .875rem;
      font-size: .625rem;
      font-weight: 200;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      cursor: pointer;
    }
  }
  .bottom {
    position: relative;
    cursor: pointer;
    height: 1.75rem;
    line-height: 1.75rem;
    background: rgba(7, 7, 7, 0.2);
    padding: 0 1.375rem 0 .75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .bulletin {
      width: 1.5rem;
      height: .875rem;
      vertical-align: top;
      margin-top: .5rem;
      background: url(../assets/bulletin@2x.png) no-repeat;
      background-size: 100%;
      border-radius: .125rem;
    }
    .message {
      font-size: .625rem;
      color: rgb(255, 255, 255);
      font-weight: 200;
      line-height: 1.75rem;
    }
    .bottom-right {
      position: absolute;
      top: .5rem;
      right: .5rem;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(.1875rem);
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
    z-index: 2000;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .detail-main {
        margin-top: 4rem;
        padding-bottom: 4rem;
        .title-name {
          line-height: 1rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 700;
        }
        .star-wrapper {
          margin-top: 1.125rem;
          padding: .125rem 0;
          text-align: center;
        }
       .detail-ul {
          width: 80%;
          margin: 0 auto 1rem auto;
          .detail-li {
            padding-left: .75rem;
            height: 1.5rem;
            line-height: 1.5rem;
            margin-bottom: .375rem;
            .text {
              vertical-align: top;
              font-size: .75rem;
              line-height: .9375rem;
              font-weight: 200;
            }
          }
        }
        .detail-bulletion {
          display: table;
          width: 80%;
          margin: 0 auto;
          font-size: .75rem;
          line-height: 1.5rem;
        }
      }
    }
    .detail-close {
      position: relative;
      width: 2rem;
      height: 2rem;
      margin: -4rem auto 0 auto;
      clear: both;
      font-size: 2rem;
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