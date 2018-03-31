<template>
  <div class="line-wrapper">
    <div class="line"></div>
    <div class="text-mes">{{caption}}</div>
    <div class="line"></div> 
  </div>
</template>

<script>
export default {
  name: 'Caption',
  props: {
    caption: {
      type: String
    }
  }
}
</script>
<style scoped lang="less">
.line-wrapper {
  display: flex;
  width: 80%;
  margin: 1.875rem auto 1.5rem auto;
  .line {
    flex: 1;
    position: relative;
    top: -.5rem;
    border-bottom: .0625rem solid rgba(255, 255, 255, 0.6);
  }
  .text-mes {
    padding: 0 .75rem;
    font-size: .875rem;
    font-weight: 700;
  }
}
</style>