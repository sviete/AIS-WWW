const path = require('path');


module.exports = {
  title: 'AI-Speaker',
  tagline: 'Lokalny, niezawodny, szybki i prywatny.',
  url: 'https://Ai-Speaker.com',
  baseUrl: '/',
  projectName: 'AI-Speaker',
  organizationName: 'sviete',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      pl: {
        label: 'Polski',
      },
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css",
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
     '@docusaurus/plugin-ideal-image',
     {
       quality: 70,
       max: 1030, // max resized image's size.
       min: 640, // min resized image's size. if original is lower, use that size.
       steps: 2, // the max number of images generated between min and max (inclusive)
     },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        // swRegister: false,
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/images/logo_ais.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(217, 130, 0)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/icons/favicon-apple-180x180',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/ais.svg',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/images/logo_ais.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: 'J9MQ9R8ORC',
      apiKey: '78c93d02f60ea8710c356432b0d6604b',
      indexName: 'sviete_ais',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI-Speaker',
      logo: {
        alt: 'AI-Speaker Logo',
        src: 'img/logo-responsive.svg',
      },
      items: [
        {to: 'docs/ais_bramka_index', label: 'Kontrolery', position: 'left'},
        {to: 'docs/ais_zigbee_index', label: 'Adaptery', position: 'left'},
        {to: 'docs/ais_app_index', label: 'System', position: 'left'},
        {to: 'docs/ais_app_player', label: 'Dodatki', position: 'left'},
        {to: 'docs/ais_dom_pro_index', label: 'PRO', position: 'left'},
        { type: 'localeDropdown', position: 'right',
        },
        {
          href: 'https://get-iot.com',
          label: 'Sklep',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://ai-speaker.discourse.group/',
          label: 'Forum',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Marketing',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/AISpeaker/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCA6XfwahvzKQDx8nmhsPFTw',
            },
          ],
        },
        {
          title: 'Informacje',
          items: [
            {
              label: 'Forum społeczności',
              href: 'https://ai-speaker.discourse.group/',
            },
            {
              label: 'O projekcie AI-Speaker',
              to: 'https://www.ai-speaker.com/project/',
            },
          ],
        },
        {
          title: 'Zasoby',
          items: [
            {
              label: 'Repozytorium OTA',
              to: 'https://www.ai-speaker.com/ota',
            },
            {
              label: 'Repozytorium APT',
              to: 'https://powiedz.co/apt',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Polityka prywatności',
              href: 'https://ai-speaker.com/ords/f?p=DOM1:PRIVACY_POLICY',
            },
            {
              label: 'Regulamin',
              href: 'https://ai-speaker.com/ords/f?p=DOM1:TERMS_OF_SERVICE',
            },
          ],
        },
      ],
      logo: {
        alt: 'AI-Speaker Logo',
        src: '/images/brands/logo_open_source.png',
        href: 'https://github.com/sviete',
      },
      copyright: `Copyright © ${new Date().getFullYear()} AI-Speaker.com`,
    },
  },
  scripts: [
  {
    src: './drift.js',
  },
  {
    src: 'https://app.ecwid.com/script.js?93913261&data_platform=code&data_date=2023-10-23',
  },
 ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sviete/AIS-WWW/edit/master/',
        },
        blog: {
          editUrl:
            'https://github.com/sviete/AIS-WWW/edit/master/',
          postsPerPage: 10,
          blogSidebarTitle:  'Najnowsze posty',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
