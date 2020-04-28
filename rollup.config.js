// import babel from 'rollup-plugin-babel';
// import commonjs from 'rollup-plugin-commonjs';
// import livereload from 'rollup-plugin-livereload';
// import minify from 'rollup-plugin-babel-minify';
// import postcss from 'rollup-plugin-postcss';
// import resolve from '@rollup/plugin-node-resolve';
// import serve from 'rollup-plugin-serve';
// import vue from 'rollup-plugin-vue'

// import nodeResolve from 'rollup-plugin-node-resolve'

const LIBRARY_NAME = 'vuetm';
const FILE_NAME = 'vuetm';
// let abc = require('./postcss.config');
const sourcemap = true;
// const plugins = [
// 	vue({
// 		css: `dist/${FILE_NAME}.css`,
// 		postcss: {
// 			plugins: abc
// 		}
// 	}),
// 	commonjs(),
// 	babel({
// 		exclude: 'node_modules/**'
// 	}),
// 	postcss()
// ];
// const pluginsWithMinify = plugins.slice(0);

// const defaultConfig = {
// 	input: 'src/index.js'
// };

// if (process.env.NODE_ENV === 'production') {
// 	pluginsWithMinify.push(minify());
// }

// if (process.env.NODE_ENV === 'development') {
// 	defaultConfig.input = 'dev/main.js';
// 	defaultConfig.watch = {
// 		include: ['src/**', 'dev/**']
// 	};

// 	plugins.push(livereload());
// 	plugins.push(serve({
// 		contentBase: '.',
// 		open: true
// 	}));
// }

// export default [
// 	Object.assign({}, defaultConfig, {
// 		output: [
// 			{
// 				file: `dist/${FILE_NAME}.common.js`,
// 				format: 'cjs',
// 				sourcemap
// 			},
// 			{
// 				file: `dist/${FILE_NAME}.es.js`,
// 				format: 'es',
// 				sourcemap
// 			}
// 		],
// 		plugins
// 	}),
// 	Object.assign({}, defaultConfig, {
// 		output: {
// 			file: `dist/${FILE_NAME}.js`,
// 			format: 'iife',
// 			name: LIBRARY_NAME,
// 			sourcemap
// 		},
// 		plugins
// 	}),
// 	Object.assign({}, defaultConfig, {
// 		output: {
// 			file: `dist/${FILE_NAME}.min.js`,
// 			format: 'iife',
// 			name: LIBRARY_NAME,
// 			sourcemap
// 		},
// 		plugins: pluginsWithMinify
// 	})
// ];


import vue from 'rollup-plugin-vue2'
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'

const plugins = [
    vue({'css':'none'}),
    babel({exclude: 'node_modules/**'}),
    replace({
    	'process.env.NODE_ENV': JSON.stringify( 'production' )
  	}),
    nodeResolve({browser: true}),
    commonjs(),
]

if (process.env.NODE_ENV === 'production') {
    plugins.push(uglify())
}

if (process.env.NODE_ENV === 'development') {
    plugins.push(livereload('dist'))
    plugins.push(serve({
        contentBase: "",
        open: true
    }))
}

export default {
    input: 'dev/main.js',
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
        },
        {
            file: `dist/${FILE_NAME}.js`,
            format: 'iife',
            name: LIBRARY_NAME,
            sourcemap
        },
        {
            file: `dist/${FILE_NAME}.min.js`,
            format: 'iife',
            name: LIBRARY_NAME,
            sourcemap
        }
    ],
    plugins
}