import imgUrl from '../img/1.jpg'
import '../css/image.css'
export function packImg() {
  const oEle = document.createElement('div')
  const oImg = document.createElement('img')
  oImg.src = require('../img/1.jpg')
  oImg.width = 380
  console.log(imgUrl)
  console.log(oImg.src === imgUrl)
  oEle.appendChild(oImg)

  const oBgImg = document.createElement('div')
  oBgImg.classList.add('bg-box')

  document.body.append(oBgImg)
}
