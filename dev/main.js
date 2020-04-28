import Vue from 'vue/dist/vue'; // Use Vue UMD version on dev server.
import vuetm from '../src/index';

Vue.use(vuetm);

new Vue({
	el: '#app',
	render: h => h('hello')
});