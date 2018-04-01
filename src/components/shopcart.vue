<template>
  <div class="shop">
      <div class="content">
          <div class="left">
            <div class="left-wrapper">
              <div class="logo-wrapper">
                  <div class="logo">
                    <span class="icon-shopping"></span>
                  </div>
              </div>
            </div>            
            <div class="price">
              <div class="text">¥100</div>
            </div>
            <div class="desc">另需配送费 ¥ {{deliveryPrice}}元</div>
          </div>
          <div class="right">
            <span class="shopping">¥ {{minPrice}}起送</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "shopcart",
  props: {
    deliveryPrice:{
      type: Number
    },
    minPrice: {
      type: Number
    }
  },
  data () {
    return {};
  },
  created () {},
  components: {},
  computed: {},
  methods: {}
};
</script>
<style scoped lang="less">
@backColor: #141d17; // 背景颜色
@shopColor: rgba(236, 231, 231, 0.342); //购物车背景颜色
@fontColor: rgba(241, 236, 236, 0.6); // 字体颜色
@rightColor: rgba(105, 102, 102, 0.342); // 右侧背景颜色
.shop {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.875rem;
  z-index: 1000;
  .content {
    display: flex;
    height: 100%;
    font-size: 0;
    background: @backColor;
    .left {
      flex: 1;
      display: flex;
      .left-wrapper {
        flex: 0 0 5rem;
        width: 5rem;
        .logo-wrapper {
          width: 3.625rem;
          height: 3.625rem;
          background: @backColor;
          border-radius: 50%;
          position: relative;
          top: -1rem;
          left: 1rem;
          padding: 0.375rem;
          .logo {
            width: 100%;
            height: 100%;
            background: @shopColor;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon-shopping {
              display: inline-block;
              width: 1.5rem;
              height: 1.5rem;
              background: url(../assets/shop_car.png) no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
      .price {
        flex: 0 0 2.875rem;
        height: 1.625rem;
        width: 2.875rem;
        margin: .625rem 0;
        border-right: 1px solid rgba(255,255,255,0.1);
        .text {
          width: 100%;
          height: 100%;
          line-height: 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: @fontColor;
          text-align: center;
        }
      }
      .desc {
        flex: 1;
        padding: 0 .75rem;
        font-size: .875rem;
        color: @fontColor;
        line-height: 2.875rem;
      }
    }
    .right {
      flex: 0 0 6.5625rem;
      width: 6.5625rem;
      line-height: 2.875rem;
      background: @rightColor;
      padding: 0 .5rem;
      text-align: center;
      .shopping {
        font-size: .8rem;
        color: @fontColor;
        font-weight: 700;
      }
    }
  }
}
</style>