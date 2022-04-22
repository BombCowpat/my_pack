const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const app = express()

const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler))

app.listen(3003, ()=> {
  console.log('http://localhost:3003')
})

