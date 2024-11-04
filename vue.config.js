const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // ここでグローバル SCSS ファイルを指定します
        // additionalData: `@import "@/styles/global.scss";`
      }
    }
  }
})
