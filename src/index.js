import { sum, square } from './js/utils.js'
const getInfo = require('./js/api.js')
import './js/login.js'
import { packImg } from './js/image.js'
import { packFont } from './js/font.js'
console.log(sum(10, 20))
console.log(square(10))
console.log(getInfo())
packImg()
packFont()
