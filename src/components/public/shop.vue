<template>
  <div class="shop-cart">
    <transition name="outline">
      <span class="icon move" v-show="shoping.count > 0" @click="removeFood($event)">
        <i class="el-icon-remove-outline outline"></i>
      </span>
    </transition>
    <transition name="count">
      <span v-show="shoping.count > 0" class="text">{{shoping.count}}</span>
    </transition>     
      <span class="el-icon-circle-plus icon plus" @click="plusFood($event)"></span>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "shop",
  props: {
    shop: {
      type: Object
    }
  },
  computed: {   
    shoping () {
      return Object.assign({}, {count: this.$store.getters.getcount(this.shop.id)}, this.shop)
    }
  },
  methods: {
    plusFood (event) {
      if (!event._constructed) return    
      this.add(this.shoping) 
    },
    removeFood (event) {
      if (!event._constructed) return
      this.minus(this.shoping)
    },
    ...mapMutations(["add", "minus"])
  }
}
</script>
<style scoped lang="less">
@iconColor: rgb(0,160,220);
@fontColor: rgb(147,153,159);
.shop-cart {
  width: 4rem;
  height: 1.25rem;
  font-size: 0;
  position: relative;
  span {
    display: inline-block;
  }
  .icon {
    position: absolute;
    font-size: 1.25rem;
    color: @iconColor;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    vertical-align: top;
    &.plus {
      right: 0;
    }
  }  
  .move {
    transition: all 0.2s linear;
    transform: translate3D(0, 0, 0);
    .outline {
      transition: all 0.3s linear;
      transform: rotate(0deg);
    }
  }
  .outline-enter-active,
  .outline-leave-active {
    transform: translate3D(2.75rem, 0, 0); 
    .outline {
      transform: rotate(360deg);
    }
  }
  .text {
    position: absolute;   
    width: 1.5rem;
    height: 1.25rem; 
    font-size: .625rem;
    color: @fontColor;
    line-height: 1.25rem;
    text-align: center; 
    
    left: 1.25rem;  
  }
  .count-enter,
  .count-leave-to {
    opacity: 0;
  }
  .count-enter-to,
  .count-leave {
    opacity: 1;
  }
  .count-enter-active {
    transition: all 0.8s linear;
  }
  .count-leave-active {
    transition: all 0.1s linear;
  }
}
</style>