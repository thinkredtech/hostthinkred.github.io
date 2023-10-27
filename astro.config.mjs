import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	site: 'https://thinkredtech.github.io',
	base: '/hostthinkred.github.io'
});
