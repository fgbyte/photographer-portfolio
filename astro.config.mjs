import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://new-mai-photo-git-develop-fgbyte.vercel.app',
	integrations: [mdx(), sitemap(), image({
		serviceEntryPoint: '@astrojs/image/sharp'
	})],
});
