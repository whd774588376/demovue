<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <ul>
        <li>
          <router-link :to="{path: '/'}" >商品</router-link>
        </li>
        <li>
          <router-link :to="{path: '/rating'}">评论</router-link>
        </li>
        <li>
          <router-link :to="{path: '/seller'}">商家</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}
</script>

<style scoped lang="less">
.tab {
  ul {
    display: flex;
    border-bottom: 1px solid #aaa;
    li {
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      a {
        display: inline-block;
        height: 100%;
      }
      .router-link-exact-active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>