import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src'
		},
		files: {
			serviceWorker: 'src/service-worker.ts'
		}
	},
	preprocess: vitePreprocess({
		style: 'postcss'
	})
};
export default config;
