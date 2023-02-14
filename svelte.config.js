import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	//preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),
	kit: {
		adapter: adapter(),
		alias: {
			'my-file': './src/routes/+page.ts'
		}
	}
};

export default config;
