<template>
    <div class="codeview relative">
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
                class="codeview-showcode"
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

<style>
.codeview-showcode {
    display: flex;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;
    background-color: hsla(0,0%,100%,.8);
    border: none;
    color: #7a7a7a;
    cursor: pointer;
    font-size: .75rem;
    justify-content: center;
    width: 100%;
    font-weight: 600;
}
</style>