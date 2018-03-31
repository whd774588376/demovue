<template>
  <div class="star" :class="startType">
    <span v-for="(itemclass,index) in startList" :class="itemclass" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const clsLength = 5
const clsOn = 'on'
const clsOff = 'off'
const clsHalf = "half"
export default {
  name: 'Star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  components: {},
  computed: {
    startType () {
      return 'star-' + this.size
    },
    startList () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(clsOn)
      }
      if (hasDecimal) {
        result.push(clsHalf)
      }
      while (result.length < clsLength) {
        result.push(clsOff)
      }
      return result
    }
  },
  methods: {}
}
</script>
<style scoped lang='less'>
.star {
    font-size: 0;
    .star-item {
        display: inline-block;
        &:last-child {
          margin-right: 0;
        }
    }
    &.star-48 {
      .star-item {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 1.375rem;       
        &.on {
          background: url(../../assets/star48_on@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.off {
          background: url(../../assets/star48_off@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.half {
          background: url(../../assets/star48_half@2x.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    &.star-36 {
      .star-item {
        width: .9375rem;
        height: .9375rem;
        margin-right: 1rem;
        &.on {
          background: url(../../assets/star36_on@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.off {
          background: url(../../assets/star36_off@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.half {
          background: url(../../assets/star36_half@2x.png) no-repeat ;
          background-size: 100% 100%;
        }
      }
    }
    &.star-24 {
      .star-item {
        width: .625rem;
        height: .625rem;
        margin-right: .1875rem;
        &.on {
          background: url(../../assets/star24_on@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.off {
          background: url(../../assets/star24_off@2x.png) no-repeat;
          background-size: 100% 100%;
        }
        &.half {
          background: url(../../assets/star24_half@2x.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
}
</style>