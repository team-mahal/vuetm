<template>
	<button :type="nativeType" :disabled="loading" :class="{
		[`bg-${type}`]: true,
		'btn-block': block,
		'btn-lg': large,
		'btn-loading': loading,
		'opacity-50': loading
	}" class="bg-green-500 hover:bg-green-900 shadow-xl px-5 py-2 rounded text-white"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'TButton',
	props: {
		color:{
			type: String,
			default: 'green-500'
		},
		type: {
			type: String,
			default: 'primary'
		},

		nativeType: {
			type: String,
			default: 'submit'
		},

		loading: {
			type: Boolean,
			default: false
		},

		block: {
			type: Boolean,
			default: false
		},

		large: {
			type: Boolean,
			default: false
		}
	}
}
</script>
