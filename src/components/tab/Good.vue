<template>
  <div class="good">
    <div class="menu-wrapper" ref="menu">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item menu-item-hook" :class="{'active': index === scrollIndex}" @click="selecdMenu(index,$event)">
          <span class="text">
            <my-icon v-if="item.type > 0" :score="item.type" :size="4" class="icon"></my-icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="food">
      <ul class="food-ul">
        <li v-for="(item,index) in goods" :key="index" class="food-li food-li-hook">
          <h1 class="food-title">{{item.name}}</h1>
          <div class="food-content">
            <ul>
              <li v-for="(food,index) in item.foods" :key="index" class="food-content-li">
                <div class="food-content-img">
                  <img :src="food.icon" alt="">
                </div>
                <div class="food-content-mes">
                  <h2 class="name">{{food.name}}</h2>
                  <p v-if="food.description" class="description">{{food.description}}</p>
                  <div class="food-content-count">
                    <span class="sell-count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="new-price">¥{{food.price}}</span><span v-if="food.oldPrice" class="old-price">¥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icon from "components/public/icon"
import BScroll from "better-scroll"
export default {
  name: 'good',
  components: {
    "my-icon": icon
  },
  data () {
    return {
      goods: [],
      heightList: [],
      menuList: [],
      menuHeight: 0,
      scrollY: 0,
      menuScrollY: 0
    }
  },
  created () {
    this.$http.get("/good").then((Response) => {
      if (Response.ok) {    
        this.goods = Response.body.message          
        this.$nextTick(() => {
          this.scroll()
          this.getHeight()
          this.getMenuList()
        })
      } else {
        alert("请求失败")
      }
    });  
  },
  computed: {
    scrollIndex () {
      for (let i = 0; i < this.heightList.length; i++) {
        let item = this.heightList[i]
        let nextItem = this.heightList[i + 1]
        if (!nextItem || (this.scrollY >= item && this.scrollY < nextItem)) {
          return i
        }
      }
    }
  },
  watch: {
    scrollIndex (val, oldVal) {
      if (val > oldVal) {
        let h = this.menuList[this.scrollIndex] - this.menuHeight
        if (h > 0) {
          this.menuScroll.scrollTo(0, -h, 300)
        }      
      } else {
        let l = this.menuList[this.menuList.length - 1] / this.menuList.length
        let h = this.menuList[this.scrollIndex] + this.menuScrollY
        let top = Math.floor(this.menuList[this.scrollIndex] - l)  
        if (h < l && this.menuScrollY < 0) {
          this.menuScroll.scrollTo(0, -top, 300)
        }
      }
    }
  },
  methods: {
    scroll () {
      this.menuScroll = new BScroll(this.$refs.menu, {
        click: true,
        probeType: 3
      })
      this.foodScroll = new BScroll(this.$refs.food, {
        probeType: 3
      })
      this.foodScroll.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))        
      })
      this.menuScroll.on("scroll", (pos) => {
        this.menuScrollY = Math.floor(pos.y)
      })
    },
    getHeight () {
      let elements = this.$refs.food.getElementsByClassName("food-li-hook")
      let height = 0
      this.heightList.push(height)
      for (let i = 0; i < elements.length; i++) {
        height += elements[i].clientHeight
        this.heightList.push(height)
      }
    },
    getMenuList () {
      let menus = this.$refs.menu.getElementsByClassName("menu-item-hook")
      this.menuHeight = this.$refs.menu.offsetHeight
      for (let i = 0; i < menus.length; i++) {       
        let height = menus[i].offsetTop + menus[i].offsetHeight
        this.menuList.push(height)     
      }
    },
    selecdMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.food.getElementsByClassName("food-li-hook")
      let el = foodList[index]
      this.foodScroll.scrollToElement(el, 300)
    }
  }
}
</script>

<style scoped lang="less">
@sizeColor: rgb(7,17,27); // 左侧菜单字体颜色
@titleColor: rgb(147,153,159); // 右侧分类title 颜色
@titleBackGround:#f3f5f7; // 右侧分类标题 背景颜色
@titleBorder:#d9dde1; // 右侧分类列表 标题颜色
@listBorder: rgba(7,17,27,0.1); // 右侧列表 border 颜色
@priceColor: rgb(240,20,20); // 价格颜色
.good {
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 10.9375rem;
  bottom: 2.875rem;
  width: 100%;
  .menu-wrapper {
    flex: 0 0 5rem;
    width: 5rem;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 3.375rem;
      width: 5rem;
      line-height: .875rem;
      padding:0 .75rem;
      border-bottom: .0625rem solid rgba(7,17,27,0.1);
      &.active {
        background: #ffffff;
        font-weight: 700;
        margin-top: -1px;
        z-index: 100;
        border: none;
      }
      .text {
        display: table-cell;
        vertical-align: middle;
        font-size: .75rem;
        color: @sizeColor;
        .icon {
          margin-top: .125rem;
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .food-ul {
      .food-li {        
        .food-title {
          height: 1.625rem;
          font-size: .75rem;
          color: @titleColor;
          line-height: 1.75rem;
          background: @titleBackGround;
          border-left: .125rem solid @titleBorder;
          padding-left: .875rem;
        }
        .food-content {
          padding: 0 1.125rem;
          .food-content-li {
            display: flex;
            padding: 1.125rem 0;
            border-bottom:.0625rem solid @listBorder;
            &:last-child {
              border: none;
            }
            .food-content-img {
              flex: 0 0 3.75rem;
              img {
                width: 3.75rem;
                height: 3.75rem;
                margin-right: .625rem;
              }             
            }
            .food-content-mes {
              font-size: .625rem;
              .name {
                margin-top: .125rem;
                height: 14px;
                font-size: .875rem;
                color: @sizeColor;
                line-height: 14px;
              }
              .description, .food-content-count {
                height: .625rem;
                line-height: .625rem;
                color: @titleColor;
                margin-top: .5rem;
              }
              .food-content-count {
                .sell-count {
                  margin-right: .75rem;
                }
              }
              .price {
                height: 1.5rem;
                line-height: 1.5rem;
                font-weight: 700;
                .new-price {
                  font-size: .875rem;
                  color: @priceColor;                  
                  margin-right: .5rem;
                }
                .old-price {
                  font-size: .625rem;
                  color: @titleColor;
                  text-decoration: line-through;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>