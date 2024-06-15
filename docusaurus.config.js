// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infinium Docs',
  tagline: 'Documentation for Infinium',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.infinium.space',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Infinium-8', // Usually your GitHub org/user name.
  projectName: 'infinium-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ], 
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Infinium Docs',
        logo: {
          alt: 'Infinium Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learn',
          },
          {
            type: "docSidebar",
            sidebarId: "useSidebar",
            position: "left",
            label: "Use",
          },
          {
            type: "docSidebar",
            sidebarId: "buildSidebar",
            position: "left",
            label: "Build",
          },
          {
            type: "docSidebar",
            sidebarId: "mineSidebar",
            position: "left",
            label: "Mine",
          },
          {
            type: "docSidebar",
            sidebarId: "stakeSidebar",
            position: "left",
            label: "Stake",
          },
          {
            type: "docSidebar",
            sidebarId: "exchangeSidebar",
            position: "left",
            label: "Exchange",
          },
          {
            href: 'https://github.com/Infinium-8/infinium-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/learn/what-is-infinium',
              },
              {
                label: 'Use',
                to: '/docs/use/overview',
              },
              {
                label: 'Build',
                to: '/docs/build/building-from-sources',
              },
              {
                label: 'Mine',
                to: '/docs/mine/overview',
              },
              {
                label: 'Stake',
                to: '/docs/stake/proof-of-stake-mining',
              },
              {
                label: 'Exchange',
                to: '/docs/exchange/overview',
              },              
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Website',
                href: 'https://infinium.space/',
              },
              {
                label: 'Downloads',
                href: 'https://infinium.space/downloads',
              },
              {
                label: 'Explorer',
                href: 'https://explorer.infinium.space/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Infinium-8',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@infinium-8',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/Infinium_8',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/InfiniumGlobal',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/jRQZMr9u84',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/infinium-8',
              },
              {
                label: 'BitcoinTalk',
                href: 'https://bitcointalk.org/index.php?topic=5302305',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'MiningPoolStats',
                href: 'https://miningpoolstats.stream/infinium/',
              },
              {
                label: 'CoinMarketCap',
                href: 'https://coinmarketcap.com/currencies/infinium/',
              },
              {
                label: 'Coingecko',
                href: 'https://www.coingecko.com/en/coins/infinium',
              },
              {
                label: 'Coinpaprika',
                href: 'https://coinpaprika.com/coin/inf-infinium',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infinium-8 `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
