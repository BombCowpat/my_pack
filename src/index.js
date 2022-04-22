import { sum, square } from './js/utils.js'
const getInfo = require('./js/api.js')
import './js/login.js'
import './js/hot.js'
import { packImg } from './js/image.js'
import { packFont } from './js/font.js'
import App from './js/App.vue'
import Vue from 'vue'
console.log(sum(10, 20))
console.log(square(10))
console.log(getInfo())
packImg()
packFont()

const a = "ES6 语法"
const b = () => {
  console.log('ES6 箭头函数')
}

const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Promise语法")
    resolve()
  }, 1000)
})

if(module.hot) {
  module.hot.accept(['./js/hot.js'], ()=> {
    console.log('模块热更新回调')
  })
}

new Vue({
  render:(h) => h(App)
}).$mount('#app')

