import './style.css'
import Hello from './components/Hello.vue';
import TButton from './components/button/TButton.vue';


//function page (path) {
  //return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
//}

const components = {
  Hello,TButton
}


// Components that are registered globaly.
// [
//   Card,
//   Child,
//   Button,
//   Model,
//   Checkbox,
//   HasError,
//   AlertError,
//   AlertSuccess
// ].forEach(Component => {
//   Vue.component(Component.name, Component)
// })

// const requireContext = require.context('~/layouts', false, /.*\.vue$/)

// const layouts = requireContext.keys()
//   .map(file =>
//     [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
//   )
//   .reduce((components, [name, component]) => {
//     components[name] = component.default || component
//     return components
//   }, {})

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