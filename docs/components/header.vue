<template>
<div class="bg-gray-100 shadow-lg">
    <div class="w-full py-2">
        <nav id="header1" class="w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">
            <div class="flex h-full justify-between items-center">
                <!--Search-->
                <div class="relative w-50 px-6">
                    <div class="hidden md:block">
                        <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                            <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                            </svg>
                        </div>

                        <input id="search-toggle" type="search" placeholder="search" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3" onkeyup="updateSearchResults(this.value);">
                    </div>
                </div>
                <!-- / Search-->
                <!--Menu-->
                <div class="flex relative inline-block pr-6">
                    <div class="relative text-sm">
                        <div class="flex">
                        	<template> 
    							<button id="userButton" class="flex items-center focus:outline-none mr-3">
                                    <avatar username="aaaaa" backgroundColor="#276749" :size="30"></avatar>
                                    <span class="hidden md:inline-block ml-1">Hi, aaaaaaaa</span>
                                </button>
    						</template>
                        </div>
                    </div>
                </div>
                <!-- / Menu -->
            </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			version:'4',
			isLocal: false
		}
	},
	computed: {

	}
}
</script>

