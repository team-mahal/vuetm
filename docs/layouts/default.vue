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

	export default {
		components:{
			Footer,
			Header,
			Sidebar
		}
	}
</script>