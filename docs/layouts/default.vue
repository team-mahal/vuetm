<template>
	<div>
		<Header/>
		<Sidebar/>
		<nuxt />
		<Footer class="ml-64"/>
	</div>
</template>

<script>
	import Footer from '~/components/footer'
	import Header from '~/components/header'
	import Sidebar from '~/components/sidebar'

	export default {
		components:{
			Footer,
			Header,
			Sidebar
		}
	}
</script>