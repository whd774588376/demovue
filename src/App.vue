<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.getSeller()
  },
  components: {
    'v-header': Header
  },
  methods: {
    getSeller () {
      this.$http.get("/seller").then((res) => {
        if (res.ok) {
          this.seller = res.body
        } else {
          alert("请求失败")
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.tab {
  ul {
    display: flex;
    border-bottom: .0625rem solid #aaa;
    li {
      flex: 1;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      a {
        display: inline-block;
        height: 100%;
      }
      .router-link-exact-active {
        color: red;
        border-bottom: .125rem solid red;
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
  line-height: 3.75rem;
}
</style>