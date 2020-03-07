'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURI: '"http://127.0.0.1:8888/v1"',// 后台api地址
  serverURI: '"http://127.0.0.1:8888"',
})
