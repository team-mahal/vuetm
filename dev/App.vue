<template>
<div>
	<div class="my-2 text-center">
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

	<div class="my-2 text-center">
		<t-button type="pink" size="sm">Small Button</t-button>
		<t-button type="pink">Default Button</t-button>
		<t-button type="pink" size="lg">Large Button</t-button>
	</div>

	<div class="my-2 text-center">
		<t-button type="outline-secondary">Secondary</t-button>
		<t-button type="outline-danger">Secondary</t-button>
		<t-button type="outline-warning">Secondary</t-button>
		<t-button type="outline-info">Secondary</t-button>
		<t-button type="outline-primary">Secondary</t-button>
		<t-button type="outline-inverse">Secondary</t-button>
		<t-button type="outline-success">Secondary</t-button>
		<t-button type="outline-light">Secondary</t-button>
		<t-button type="outline-purple">Secondary</t-button>
		<t-button type="outline-pink">Secondary</t-button>
	</div>

	<div class="my-2 text-center">
		<t-button type="outline-secondary" pill>Secondary</t-button>
		<t-button type="outline-danger" pill>Secondary</t-button>
		<t-button type="outline-warning" pill>Secondary</t-button>
		<t-button type="outline-info" pill>Secondary</t-button>
		<t-button type="outline-primary" pill>Secondary</t-button>
		<t-button type="outline-inverse" pill>Secondary</t-button>
		<t-button type="outline-success" pill>Secondary</t-button>
		<t-button type="outline-light" pill>Secondary</t-button>
		<t-button type="outline-purple" pill>Secondary</t-button>
		<t-button type="outline-pink" pill>Secondary</t-button>
	</div>

	<div class="my-2 text-center">
		<t-button type="outline-secondary" pill d3>Secondary</t-button>
		<t-button type="outline-danger" pill d3>Secondary</t-button>
		<t-button type="outline-warning" pill d3>Secondary</t-button>
		<t-button type="outline-info" pill d3>Secondary</t-button>
		<t-button type="outline-primary" pill d3>Secondary</t-button>
		<t-button type="outline-inverse" pill d3>Secondary</t-button>
		<t-button type="outline-success" pill d3>Secondary</t-button>
		<t-button type="outline-light" pill d3>Secondary</t-button>
		<t-button type="outline-purple" pill d3>Secondary</t-button>
		<t-button type="outline-pink" pill d3>Secondary</t-button>
	</div>

	<div class="my-2 text-center">
		<t-button type="outline-secondary" pill d3 class="inline-flex items-center">
			<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
			Secondary
		</t-button>

		<t-button type="outline-success" pill d3 class="inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"> <path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697 c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621 c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047 c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898 C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773 c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088 c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z"/> </svg>
            <span>Login with Twitter</span>
        </t-button>
       <t-button type="success" pill class="inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" version="1.1" id="Open_book" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"> <path d="M10.595,5.196l0.446,1.371c0.369-0.316,0.835-0.599,1.441-0.795c0.59-0.192,1.111-0.3,1.582-0.362l-0.43-1.323 c-0.476,0.069-1.001,0.18-1.58,0.368C11.476,4.643,10.999,4.905,10.595,5.196z M11.522,8.051l0.446,1.371 c0.369-0.316,0.835-0.599,1.441-0.795c0.59-0.192,1.111-0.3,1.582-0.362l-0.43-1.323c-0.476,0.069-1.001,0.18-1.58,0.368 C12.403,7.497,11.927,7.759,11.522,8.051z M12.45,10.905l0.446,1.371c0.369-0.316,0.835-0.599,1.441-0.795 c0.59-0.192,1.111-0.3,1.582-0.362l-0.43-1.323c-0.476,0.069-1.001,0.18-1.58,0.368C13.33,10.351,12.854,10.614,12.45,10.905z M5.388,13.077l0.43,1.323c0.417-0.226,0.902-0.445,1.492-0.636c0.606-0.197,1.149-0.242,1.633-0.203l-0.446-1.371 c-0.499,0.002-1.038,0.07-1.615,0.257C6.303,12.635,5.813,12.853,5.388,13.077z M3.533,7.368l0.43,1.323 C4.38,8.465,4.865,8.247,5.455,8.055c0.606-0.197,1.149-0.242,1.633-0.203L6.643,6.48C6.144,6.483,5.605,6.55,5.027,6.738 C4.448,6.926,3.958,7.144,3.533,7.368z M4.46,10.223l0.43,1.323c0.417-0.226,0.902-0.445,1.492-0.636 c0.606-0.197,1.149-0.242,1.633-0.203L7.57,9.335c-0.499,0.002-1.038,0.07-1.615,0.257C5.376,9.78,4.885,9.999,4.46,10.223z M11.064,1.41C9.341,1.97,8.441,3.162,8.011,3.969c-0.822-0.4-2.25-0.835-3.973-0.275c-2.523,0.82-3.969,2.627-3.969,2.627 l4.095,12.587c0.126,0.387,0.646,0.477,0.878,0.143c0.499-0.719,1.46-1.658,3.257-2.242c1.718-0.558,2.969,0.054,3.655,0.578 c0.272,0.208,0.662,0.06,0.762-0.268c0.252-0.827,0.907-2.04,2.61-2.593c1.799-0.585,3.129-0.389,3.956-0.1 c0.385,0.134,0.75-0.242,0.625-0.629L15.819,1.203C15.819,1.203,13.587,0.591,11.064,1.41z M10.951,15.256 c-0.819-0.244-1.901-0.358-3.141,0.044c-1.251,0.406-2.127,0.949-2.699,1.404L1.866,6.722C2.224,6.364,3.053,5.68,4.528,5.201 c1.389-0.451,2.528-0.065,3.279,0.378L10.951,15.256z M17.845,12.567c-0.731-0.032-1.759,0.044-3.01,0.451 c-1.24,0.403-2.048,1.132-2.567,1.81L9.124,5.151c0.346-0.8,1.04-1.782,2.43-2.233c1.474-0.479,2.547-0.413,3.047-0.334 L17.845,12.567z"/> </svg>
            <span>Booktime</span>
        </t-button>
	</div>

	<div class="text-center mt-3">
		<t-button type="primary" disabled squared>Secondary</t-button>
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