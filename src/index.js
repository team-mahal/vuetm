import Hello from './components/Hello.vue';

/**
 * An install function.
 *
 * @param {any} Vue Vue API.
 */
function install(Vue) {
	Vue.component('hello', Hello);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};