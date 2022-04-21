import '../fonts/iconfont.css'
import '../css/font.css'
export function packFont() {
  const oEle = document.createElement('div')
  const oSpan = document.createElement('span')
  oSpan.classList.add('iconfont')
  oSpan.classList.add('icon-fenxiang')
  oSpan.classList.add('lg-icon')
  oEle.appendChild(oSpan)
  document.body.appendChild(oEle)
}
