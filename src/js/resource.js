// const url = 'http://localhost:3400'
exports.install = function (Vue, options) {
  Vue.prototype.get = function (api) {
    console.log(this.$http)
    console.log(api)
    // return this.$http.get(url + api)
  }
}