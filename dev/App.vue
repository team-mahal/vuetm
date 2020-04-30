<template>
<div>
	<div>
		<t-button type="secondary">Secondary</t-button>
		<t-button type="danger">Danger</t-button>
		<t-button type="warning">Warning</t-button>
		<t-button type="info">Info</t-button>
		<t-button type="primary">Primary</t-button>
		<t-button type="inverse">Inverse</t-button>
		<t-button type="success">Success</t-button>
		<t-button type="light">Light</t-button>
		<t-button type="purple">Purple</t-button>
		<t-button type="pink" squared>Pink</t-button>
	</div>

	<div>
		<t-button type="pink" size="sm">Small Button</t-button>
		<t-button type="pink">Default Button</t-button>
		<t-button type="pink" size="lg">Large Button</t-button>
	</div>

	<div>
		<t-button type="outline-secondary">Secondary</t-button>
		<t-button type="outline-secondary" pill class="font-extrabold">Secondary</t-button>
	</div>
</div>
</template>

<script>
export default {
	name: 'App',
	
	data () {
		return {
			
		}
	},
}
</script>