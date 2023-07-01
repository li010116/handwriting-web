const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',//https://testhand.liuweiqing.top
        changeOrigin: true,
      },
    },
  },
};
