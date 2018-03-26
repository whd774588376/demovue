<template>
  <div class="star" :class="startType">
    <span v-for="(itemclass,index) in startList" :class="itemclass" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const clsLength = 5
const clsOn = 'el-icon-star-on'
const clsOff = 'el-icon-star-off'
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
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(clsOn)
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
        background-repeat: no-repeat;
    }
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        font-size: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &:last-child {
            margin-right: 0;
        }
      }
      .el-icon-star-on {
          color: rgb(247, 202, 6);
      }
    }
}
</style>