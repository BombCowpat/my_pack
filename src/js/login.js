import '../css/login.css'
// import 'css-loader!../css/login.css'
import '../css/login.less'

function login() {
  const oH2 = document.createElement('h2')
  oH2.innerHTML = 'Login'
  oH2.classList.add('title')
  return oH2
}

document.body.appendChild(login())