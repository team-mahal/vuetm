import vue from 'rollup-plugin-vue2'
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss'
import path from 'path'

const LIBRARY_NAME = 'vuetm';
const FILE_NAME = 'vuetm';
const sourcemap = true;

let postcssconfig = require('./postcss.config');

const defaultConfig = {
    input: 'src/index.js'
};

const plugins = [
    vue(),
    babel({
        exclude: 'node_modules/**'
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    nodeResolve({browser: true}),
    commonjs(),
    postcss({extract: path.resolve(`dist/${FILE_NAME}.css`,)})
];

const pluginsWithMinify = plugins.slice(0);

if (process.env.NODE_ENV === 'production') {
    pluginsWithMinify.push(minify());
}

if (process.env.NODE_ENV === 'development') {

    defaultConfig.input = 'dev/main.js';
    defaultConfig.watch = {
        include: ['src/**', 'dev/**']
    };

    plugins.push(livereload('dist'))
    plugins.push(serve({
        contentBase: "",
        open: true
    }))
}


let config =  [
    Object.assign({}, defaultConfig, {
        output: [
            {
                file: `dist/${FILE_NAME}.common.js`,
                format: 'cjs',
                sourcemap
            },
            {
                file: `dist/${FILE_NAME}.es.js`,
                format: 'es',
                sourcemap
            }
        ],
        plugins
    }),
    Object.assign({}, defaultConfig, {
        output: {
            file: `dist/${FILE_NAME}.js`,
            format: 'iife',
            name: LIBRARY_NAME,
            sourcemap
        },
        plugins
    }),
    Object.assign({}, defaultConfig, {
        output: {
            file: `dist/${FILE_NAME}.min.js`,
            format: 'iife',
            name: LIBRARY_NAME,
            sourcemap
        },
        plugins: pluginsWithMinify
    })
];

export default config
