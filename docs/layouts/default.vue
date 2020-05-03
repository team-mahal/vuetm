<template>
<div>
	<Header/>
	<div class="flex">
		<Sidebar class="w-64"/>
		<div class="p-4">
			<nuxt/>
		</div>
	</div>
	<Footer/>
</div>
</template>

<script>
	import Footer from '~/components/footer'
	import Header from '~/components/header'
	import Sidebar from '~/components/sidebar'
	import Clipboard from 'clipboard'
	export default {
		components:{
			Footer,
			Header,
			Sidebar,
		},
		data() {
	        return {
	            clipboard: null
	        }
	    },
		methods: {
	        setupClipboardControls() {
	            // Destroy clipboard instance if there's any
	            this.clipboard && this.clipboard.destroy()

	            this.clipboard = new Clipboard('.copy-code', {
	                target: (trigger) => trigger.parentElement.parentElement.querySelector('code')
	            })

	            this.clipboard.on('success', (e) => {
	                this.$buefy.toast.open('Copied to clipboard!')
	            })

	            this.clipboard.on('error', (e) => {
	                this.$buefy.toast.open({
	                    message: 'Error while copying to clipboard :(',
	                    type: 'is-danger'
	                })
	            })
	        }
	    },
	    mounted() {
	        this.setupClipboardControls()
	    },
	}
</script>