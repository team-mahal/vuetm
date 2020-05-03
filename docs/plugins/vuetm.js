import Vue from 'vue'; // Use Vue UMD version on dev server.
import vuetm from '../../src/index';
Vue.use(vuetm);

import Example from './../components/Example'
import CodeView from './../components/CodeView'

// Vue.component('ApiView', ApiView)
Vue.component('CodeView', CodeView)
// Vue.component('VariablesView', VariablesView)
Vue.component('Example', Example)
