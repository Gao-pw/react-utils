// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gao-pw.github.io',
  base: 'react-utils',
  integrations: [
    starlight({
      title: '@siroi/react-utils',
      social: {
        github: 'https://github.com/Gao-pw/react-utils',
      },
      logo: {
        src: './src/assets/logo.svg',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-tomorrow.min.css',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-jsx.min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://at.alicdn.com/t/c/font_4822999_gc5vg7kzq4a.js',
          },
        },
      ],
      sidebar: [
        { label: '快速使用', link: '/home' },
        {
          label: 'react-hooks',
          autogenerate: { directory: 'guides' },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: 'Example Guide', slug: 'guides/example' },
          // ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
        {
          label: '基础方法',
          autogenerate: { directory: 'utils' },
        },
      ],
      customCss: ['./src/tailwind.css'],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    }),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    ssr: {
      noExternal: ['@siroi/react-utils', '@siroi/fe-utils'],
    },
  },
});
