<template>
    <section>
        <p :id="`${slugifiedTitle}`">
            <router-link v-if="title" :to="`#${slugifiedTitle}`">#</router-link>
            {{ title }}
        </p>
        <div>
            <slot/>
        </div>
        <div class="button-container w-1/2">
            <CodepenEdit :code="code" :title="title"/>
        </div>
        <div
            v-if="code && component"
            class="flex relative border-2"
            :class="{ 'flex': vertical }">
            <div class="w-1/2" :class="{ 'is-paddingless': paddingless }">
                <component :is="component"/>
            </div>
            <CodeView
                :code="code"
                class="w-1/2"
                bordered
                codepen
            />
        </div>
        <hr>
    </section>
</template>

<script>
import CodepenEdit from './CodepenEdit'
export default {
    components: {
        CodepenEdit
    },
    props: {
        component: [Object, Function],
        code: String,
        title: String,
        paddingless: Boolean,
        vertical: Boolean
    },
    computed: {
        slugifiedTitle() {
            if (!this.title) return ''
            return this.title.toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w-]+/g, '') // Remove all non-word chars
                .replace(/--+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, '') // Trim - from end of text
        }
    }
}
</script>

<style>
.codeview .highlight .codeview-hidecode {
    position: static!important;
    height: 2rem;
}
.codeview .highlight.is-expanded {
    height: auto;
}
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
.codeview .highlight pre code.hljs {
    background: inherit;
    color: inherit;
    padding: 1.25rem 1.5rem;
}
.codeview .highlight pre code {
    overflow: hidden;
    max-height: 600px;
}
.hljs {
    display: block;
    overflow-x: auto;
    background: #efecf4;
    color: #585260;
    padding: .5em;
}
.codeview .highlight {
    position: relative;
    text-align: left!important;
    height: 3.25rem;
}
.highlight {
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    padding: 0;
}
.codeview .highlight pre code {
    overflow: hidden;
    max-height: 600px;
}
pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
}
code, hr {
    background-color: #f5f5f5;
}

code {
    color: #ff3860;
    font-size: .875em;
    font-weight: 400;
    padding: .25em .5em;
}

.codeview .highlight {
    position: relative;
    text-align: left!important;
    height: 3.25rem;
}
.highlight {
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    padding: 0;
}
.codeview .highlight .button-container {
    position: absolute;
    display: inline-flex;
    background: transparent;
    border-radius: 4px 4px 0 0;
    top: .25rem;
    right: 1.35rem;
    padding: 0 0 0 8px;
    vertical-align: top;
}
</style>