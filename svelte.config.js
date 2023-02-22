import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import { sequence } from '@sveltejs/kit/hooks';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: seqPreprocessor([
			preprocess({postcss: true}),
			preprocessThrelte({
				extensions: {
					// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
					'three/examples/jsm/controls/OrbitControls': ['OrbitControls'],
					// import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
					'three/examples/jsm/controls/TransformControls': ['TransformControls'],		
					// import { CustomGrid } from '$lib/CustomGrid'
					'$lib/CustomGrid': ['CustomGrid']
				}
			}),
			vitePreprocess(),
	]),
	//preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),
	kit: {
		adapter: adapter(),
		alias: {
			'my-file': './src/routes/+page.ts'
		}
	},
	assetsInclude: ['**/*.glb'],
};

export default config;
