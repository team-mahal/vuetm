import './style.css'
import Hello from './components/Hello.vue';
import Helloa from './components/Helloa.vue';

const components = {
  Hello,Helloa
}

/**
 * An install function.
 *
 * @param {any} Vue Vue API.
 */
function extendComponent (Vue, componentName) {
  return Vue.extend({
    ...components[componentName],
  })
}

function install(Vue, args = {}) {

	if (this.installed) {
      return
    }

    this.installed = true

    const componentsToRegister = args.components || Object.keys(components)

    componentsToRegister.forEach(componentName => {
		// Vue.component('hello', Hello);
     	Vue.component(componentName, extendComponent(Vue, componentName))
    })
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};