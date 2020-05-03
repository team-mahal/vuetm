<template>
    <section class="example-section">
        <p :id="`${slugifiedTitle}`" class="title is-4">
            <router-link v-if="title" :to="`#${slugifiedTitle}`">#</router-link>
            {{ title }}
        </p>
        <div class="content">
            <slot/>
        </div>

        <div
            v-if="code && component"
            class="example"
            :class="{ 'flex': vertical }">
            <div class="button-container">
                <CodepenEdit :code="code" :title="title"/>
            </div>
            <div class="example-component" :class="{ 'is-paddingless': paddingless }">
                <component :is="component"/>
            </div>
            <CodeView
                :code="code"
                bordered
                codepen
            />
        </div>
        <hr class="is-medium">
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
.codeview .highlight .codeview-hidecode, .codeview .highlight .codeview-showcode {
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
.example .button-container {
    position: absolute;
    display: inline-flex;
    background: #ffdd57;
    border-radius: 4px 4px 0 0;
    bottom: 100%;
    right: -1px;
    padding: 0 0 0 8px;
    vertical-align: top;
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
.example.is-vertical .codeview, .example.is-vertical .example-component {
    width: 50%;
    }.example.is-vertical .codeview {
    display: flex;
    flex-direction: column;
    border-top: 0;
    border-left: 1px solid #ffdd57;
}
.example .button-container .button:not(:last-child) {
    margin-right: .5rem;
}
.example .button-container .button {
    display: flex;
    align-items: flex-end;
    font-size: 11px;
    padding: 0;
    text-decoration: none;
}
    .example {
    position: relative;
    display: flex;
    border: 1px solid #ffdd57;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    color: rgba(0,0,0,.7);
}
.example:not(:first-child) {
    margin-top: 2rem;
}
.example:not(:last-child) {
    margin-bottom: 1.5rem;
}
.example .button-container {
    position: absolute;
    display: inline-flex;
    background: #ffdd57;
    border-radius: 4px 4px 0 0;
    bottom: 100%;
    right: -1px;
    padding: 0 0 0 8px;
    vertical-align: top;
}
</style>