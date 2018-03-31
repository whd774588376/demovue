<template>
  <span class="icon" :class="[className,classSize]"></span>
</template>

<script>
export default {
  name: "icon",
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  data () {
    return {
      className: ""
    }
  },
  created () {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"]
    this.className = this.classMap[this.score]
    this.classSize = "icon-" + this.size
  }
}
</script>
<style scoped lang="less">
.icon {
  display: inline-block;
  vertical-align: top;
  &.icon-3 {
    width: .875rem;
    height: .875rem;
    &.decrease {
      background: url(../../assets/decrease_1@3x.png) no-repeat;
      background-size: 100%;
    }
    &.discount {
      background: url(../../assets/discount_1@3x.png) no-repeat;
      background-size: 100%;
    }
    &.guarantee {
      background: url(../../assets/guarantee_1@3x.png) no-repeat;
      background-size: 100%;
    }
    &.invoice {
      background: url(../../assets/invoice_1@3x.png) no-repeat;
      background-size: 100%;
    }
    &.special {
      background: url(../../assets/special_1@3x.png) no-repeat;
      background-size: 100%;
    }
  }
  &.icon-4 {
    width: .75rem;
    height: .75rem;
    &.decrease {
      background: url(../../assets/decrease_4@2x.png) no-repeat;
      background-size: 100%;
    }
    &.discount {
      background: url(../../assets/discount_4@2x.png) no-repeat;
      background-size: 100%;
    }
    &.guarantee {
      background: url(../../assets/guarantee_4@2x.png) no-repeat;
      background-size: 100%;
    }
    &.invoice {
      background: url(../../assets/invoice_4@2x.png) no-repeat;
      background-size: 100%;
    }
    &.special {
      background: url(../../assets/special_4@2x.png) no-repeat;
      background-size: 100%;
    }
  }
}
</style>