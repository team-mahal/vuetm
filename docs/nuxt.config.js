const fs = require('fs')
const path = require('path')
const { BASE_URL, GA_TRACKING_ID, TWITTER_HANDLE } = require('./constants')


// --- Main export ---

module.exports = {
	srcDir: __dirname,

	modern: 'client',

	env: {
		// ENV vars provided by Netlify build:
		// - `true` if on Netlify (dev or PR)
		NETLIFY: process.env.NETLIFY,
		// Determines the context from netlify (`production`, `deploy-preview` or `branch-deploy`)
		// In our case, `production` means the dev branch (bootstrap-vue.netlify.com)
		NETLIFY_CONTEXT: process.env.NETLIFY ? process.env.CONTEXT : null,
		// - `true` if triggered by a Pull request commit
		PULL_REQUEST: process.env.NETLIFY ? process.env.PULL_REQUEST : null,
		// - If the previous is `true`, this will be the PR number
		REVIEW_ID: process.env.NETLIFY && process.env.PULL_REQUEST ? process.env.REVIEW_ID : null,
		// ENV vars provided by Vercel/Zeit Now build
		// https://zeit.co/docs/v2/build-step#system-environment-variables
		// - `true` if on Zeit Now (dev or PR)
		VERCEL_NOW: process.env.VERCEL_GITHUB_DEPLOYMENT,
		// - The branch name used for the deploy (i.e. `dev`, `master`, `patch-1`, etc)
		VERCEL_BRANCH: process.env.VERCEL_GITHUB_COMMIT_REF,
		// - The Commit SHA hash
		VERCEL_COMMIT_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
		// - The deployment URL
		VERCEL_URL: process.env.VERCEL_URL,
		// - The Github Organization (ie. bootstrap-vue)
		VERCEL_GITHUB_ORG: process.env.VERCEL_GITHUB_ORG,
		// - The repo is the organization (i.e. bootstrap-vue)
		VERCEL_GITHUB_REPO: process.env.VERCEL_GITHUB_REPO
	},

	build: {
		
	},

	loading: {
		color: '#ccc',
		height: '3px'
	},

	pwa: {
		icon: {
			// iconFileName: 'icon.png',
			iconSrc: '~/static/icon.png'
		},
		manifest: {
			name: 'BootstrapVue',
			short_name: 'BootstrapVue',
			description: 'Quickly integrate Bootstrap v4 components with Vue.js',
			theme_color: '#563d7c'
		},
		meta: {
			// `ogHost` is required for `og:image` to be populated
			ogHost: BASE_URL,
			ogImage: true,
			twitterCard: 'summary',
			twitterSite: TWITTER_HANDLE,
			twitterCreator: TWITTER_HANDLE
		}
	},




	head: {
		meta: [{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
		script: [
			{
				src: '//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver',
				crossorigin: 'anonymous'
			}
		]
	},

	css: [
		// '@assets/css/docs.min.css',
		// '@assets/scss/styles.scss'
	]
}
