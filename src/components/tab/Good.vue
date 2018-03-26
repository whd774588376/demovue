<template>
  <div class="good">
    <div class="menu-wrapper"></div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'good',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.good {
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .foods-wrapper {
    flex: 1;
  }
}
</style>