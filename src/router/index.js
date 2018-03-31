import Vue from 'vue'
import Router from 'vue-router'
import Good from 'tab/Good'
import Rating from 'tab/Rating'
import Seller from 'tab/Seller'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'good',
      component: Good
    },
    {
      path: '/rating',
      name: 'rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router