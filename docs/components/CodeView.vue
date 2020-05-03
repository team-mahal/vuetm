<template>
    <div class="codeview">
        <div v-if="title" class="codeview-title">{{ title }}</div>
        <figure class="highlight " :class="figureClasses">
            <div class="text-right">
                <button class="copy-code">Copy</button>
                <button
                    v-if="!expanded"
                    @click="isExpanded = false">
                    Hide
                </button>
            </div> 
            <pre v-highlight><code :class="lang">{{ code }}</code></pre>
            <button
                v-if="!isExpanded && !expanded"
                class="absolute top-0 left-0 flex items-center"
                @click="isExpanded = true">
                <span>Show code</span>
            </button>
            <button
                v-if="!expanded"
                class="codeview-hidecode"
                @click="isExpanded = false">
                <span>Hide code</span>
            </button>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        lang: {
            type: String,
            default: 'html'
        },
        bordered: Boolean,
        code: String,
        expanded: Boolean,
        title: String
    },
    data() {
        return {
            isExpanded: false
        }
    },
    computed: {
        figureClasses() {
            return {
                'is-collapsed': !this.bordered && !this.expanded,
                'is-expanded': this.isExpanded || this.expanded
            }
        }
    }
}
</script>