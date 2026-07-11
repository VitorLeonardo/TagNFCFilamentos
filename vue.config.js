const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TagNFCFilamentos/' // Nome exato do seu repositório no GitHub
    : '/'
})
