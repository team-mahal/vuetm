import Vue from 'vue/dist/vue'; // Use Vue UMD version on dev server.
import App from './App.vue'
Vue.config.productionTip = false
import vuetm from '../src/index';
Vue.use(vuetm);
new Vue({
  render: h => h(App)
}).$mount('#app')