<template>
	<button :type="nativeType" :disabled="loading" :class="{
			[`${type}`]: true,
			'btn-block': block,
			'btn-lg': large,
			'btn-loading ': loading,
			'opacity-50': loading
		}">
		<slot />
	</button>
</template>

<script>
export default {
	name: 'TButton',
	props: {
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

<style>
.primary{
	@extend .bg-green-500;
}
</style>
