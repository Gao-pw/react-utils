// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://gao-pw.github.io",
    base: "react-utils",
    integrations: [starlight({
        title: '@siroi/react-utils',
        prerender: false,
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), react()],
    vite:{
        ssr: {
            noExternal: ['@siroi/react-utils', '@siroi/fe-utils']
        }
    }
});