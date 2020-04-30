<template>
	<button :type="nativeType" :disabled="loading" class="btn" :class="{
			[`${type}`]: true,
			'block w-full': block,
			[`btn-${size}`]: true,
			'btn-loading': loading,
			'rounded': squared,
			'border-b-4': d3,
			'rounded-full font-bold ': pill,
			'opacity-50': loading
		}">
		<slot/>
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
		size: {
			type: String,
			default: 'md'
		},
		pill: {
			type: Boolean,
			default: false
		},
		squared: {
			type: Boolean,
			default: false
		},
		d3: {
			type: Boolean,
			default: false
		}
	}
}
</script>
