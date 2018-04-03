<template>
  <div class="shop">
      <div class="content">
          <div class="left">
            <div class="left-wrapper">
              <div class="logo-wrapper" @click="detail">
                  <div class="logo" :class="{'cart': totalCount > 0}">
                    <span class="icon-shopping"></span>
                  </div>
                  <div class="count" v-show="totalCount > 0">{{totalCount}}</div>
              </div>              
            </div>            
            <div class="price">
              <div class="text">¥{{totalPrice}}</div>
            </div>
            <div class="desc">另需配送费 ¥ {{deliveryPrice}}元</div>
          </div>
          <div class="right" :class="{'payment': totalPrice >= minPrice}">
            <span class="shopping" >{{payment}}</span>
          </div>
      </div>
      <div class="details" v-show="detCart">
        <transition name="detail">
          <div class="cart-detail">
            <div class="cart-head">
              <span class="cart">购物车</span>
              <span class="clear" @click="remove">清空</span>
            </div>
            <div class="cart-content" ref="cart">
              <ul>
                <li v-for="(food, index) in foodList" :key="index" class="cart-food">
                  <div class="cart-food-left">{{food.name}}</div>
                  <div class="cart-food-right">
                    <p>¥ {{food.price}}</p>
                    <div class="cart-food-shop">
                      <my-shop :shop="food"></my-shop>
                    </div>                   
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>       
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import shop from "components/public/shop"
export default {
  name: "shopcart",
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      detCart: false
    };
  },
  created () {
    this.$nextTick(() => {
      this.cart = new BScroll(this.$refs.cart, {
        click: true
      })
    })
  },
  components: {
    "my-shop": shop
  },
  computed: {
    totalPrice () {
      let price = 0;
      this.$store.state.foods.map((food) => {
        price += food.price * food.count
      })
      return price
    },
    totalCount () {
      let count = 0;
      this.$store.state.foods.map((food) => {
        count += food.count
      })
      return count
    },
    payment () {
      if (this.totalPrice >= this.minPrice) {
        return `去结算`
      } else if (this.totalPrice < this.minPrice && this.totalPrice > 0) {
        return `还差¥${this.minPrice - this.totalPrice}元起送`
      } else {
        return `¥${this.minPrice}元起送`
      }
    },
    foodList () {
      return this.$store.state.foods
    }
  },
  methods: {
    detail () {
      if (this.totalCount > 0) {
        this.detCart = !this.detCart
        this.scroll()
      }   
    },
    scroll () {
      console.log(this.$store.state.foods)  
    },
    remove () {
      console.log(this.$children)
    }
  }
};
</script>
<style scoped lang="less">
@backColor: #141d17; // 背景颜色
@shopColor: rgba(236, 231, 231, 0.342); //购物车背景颜色
@fontColor: rgba(241, 236, 236, 0.6); // 字体颜色
@rightColor: rgba(105, 102, 102, 0.342); // 右侧背景颜色
@payColor: rgb(4, 156, 98);
@coutColor: rgb(240, 20, 20); // 总件数背景颜色
@coutFontColor: rgb(255, 255, 255); // 总件数字体颜色
@cartColor: rgb(0, 160, 220); // 购物车 有物品时的背景颜色
@detBackColor: rgba(7, 17, 27, 0.6); //购物车详情遮罩层背景色
@detHead: #f3f5f7; // 购物车详情头部背景色
@detFontLeft: rgb(7, 17, 27); // 购物车详情头部字体颜色
@detFontRight: rgb(0, 160, 220); // 购物车详情头部字体颜色
@detBorder: rgba(7, 17, 27, 0.2); 
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
        position: relative;
        .logo-wrapper {
          width: 3.625rem;
          height: 3.625rem;
          background: @backColor;
          border-radius: 50%;
          position: relative;
          top: -1rem;
          left: 1rem;
          padding: 0.375rem;
          z-index: 10;
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
            &.cart {
              background: @cartColor;
            }
          }
          .count {
            position: absolute;
            top: 0;
            right: 0;
            width: 1.5rem;
            height: 1.125rem;
            line-height: 1.125rem;
            font-size: .625rem;
            font-weight: 700;
            background-color: @coutColor;
            color: @coutFontColor;
            border-radius: 15px;
            box-shadow: 0 .25rem .5rem 0 rgba(0, 0, 0, 0.4);
            text-align: center;
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
      &.payment {
        background: @payColor;
      }
      .shopping {
        font-size: .8rem;
        color: @fontColor;
        font-weight: 700;
      }
    }
  }
  .details {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 2.875rem;
    left: 0;
    background: @detBackColor;
    .cart-detail {
      position: absolute;
      padding-bottom: 1.125rem; 
      bottom: 0;
      width: 100%;
      max-height: 80%;
      background: #ffffff;
      overflow: hidden;
      .cart-head {
        height: 2.5rem;
        background: @detHead;
        padding: 0 1.125rem;
        display: flex;
        border-bottom: .125rem solid @detBorder;
        span {
          display: inline-block;
          height: 2.5rem;
          line-height: 2.5rem;
        }
        .cart {
          flex: 1;
          font-size: .875rem;
          font-weight: 200;
          color: @detFontLeft;
        }
        .clear {
          flex: 0 0 2.5rem;
          font-size: .75rem;
          color: @detFontRight;
          text-align: right;
        }
      }
      .cart-content {
        padding: 0 1.125rem;
        max-height: 25rem;
        overflow: hidden;
        .cart-food {
          height: 3rem;
          display: flex;
          padding: .75rem 0;
          border-bottom: .0625rem solid @detBorder;
          .cart-food-left {
            flex: 1;
            font-size: .875rem;
            color: @detFontLeft;
            line-height: 1.5rem;
            font-weight: 700;
          }
          .cart-food-right {
            flex: 0 0 7rem;
            line-height: 1.5rem;
            color: @coutColor;
            font-weight: 700;
            font-size: .875rem;
            display: flex;
            .cart-food-shop {
              flex: 1;
              text-align: right;
              padding-top: .125rem;
            }
          }
        }
      }
    }
  }  
}
</style>