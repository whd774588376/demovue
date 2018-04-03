<template>
  <div class="shop-cart">
      <span class="el-icon-remove-outline icon" v-show="count > 0" @click="removeFood($event)"></span>
      <span v-show="count > 0" class="text">{{count}}</span>
      <span class="el-icon-circle-plus icon" @click="plusFood($event)"></span>
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
  data () {
    return {
      shoping: this.shop
    }
  },
  created () {
    this.shoping = Object.assign({}, {count: this.$store.getters.getcount(this.shoping.id)}, this.shoping)
  },
  computed: {
    count () {
      return this.$store.getters.getcount(this.shoping.id)
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
    getcount () {
      this.count = this.$store.getters.getcount(this.shoping.id)
    },
    ...mapMutations(["add", "minus"])
  }
}
</script>
<style scoped lang="less">
@iconColor: rgb(0,160,220);
@fontColor: rgb(147,153,159);
.shop-cart {
  font-size: 0;
  span {
    display: inline-block;
  }
  .icon {
    font-size: 1.25rem;
    color: @iconColor;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    vertical-align: top;
  }
  .text {
    font-size: .625rem;
    color: @fontColor;
    width: 1.5rem;
    height: 1.25rem;    
    line-height: 1.25rem;
    text-align: center;
  }
}
</style>