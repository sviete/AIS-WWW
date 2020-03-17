module.exports = {
  title: 'Asystent domowy',
  tagline: 'Lokalny, niezawodny, szybki i prywatny.',
  url: 'https://Ai-Speaker.com',
  baseUrl: '/',
  projectName: 'AI-Speaker',
  organizationName: 'sviete',
  favicon: 'img/favicon.ico',
  themeConfig: {
    algolia: {
      apiKey: '147dbf3542b38e29ef7abb54fbc19372',
      indexName: 'sviete_ais',
    },
    navbar: {
      title: 'Asystent domowy',
      logo: {
        alt: 'Asystent domowy Logo',
        src: 'img/logo-responsive.svg',
      },
      links: [
        {to: 'docs/ais_bramka_index', label: 'Bramka', position: 'left'},
        {to: 'docs/ais_app_index', label: 'Aplikacja', position: 'left'},
        {to: 'docs/ais_remote_index', label: 'Pilot', position: 'left'},
        {to: 'docs/ais_app_player', label: 'Integracje', position: 'left'},
        {to: 'docs/ais_iot_s26', label: 'Urządzenia', position: 'left'},
        {
          href: 'https://ai-speaker.com/project',
          label: 'AI-Speaker',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://ai-speaker.discourse.group/',
          label: 'Forum',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Zasoby',
          items: [
            {
              label: 'Repozytorium kodów GitHub',
              href: 'https://github.com/sviete',
            },
            {
              label: 'Repozytorium aktualizacji OTA',
              to: 'https://www.ai-speaker.com/ota',
            },
            {
              label: 'Repozytorium pakietów APT',
              to: 'https://www.ai-speaker.com/apt',
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
            {
              label: 'Prezentacja Asystenta',
              to: 'https://www.ai-speaker.com/project/dom/',
            },
          ],
        },
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Speaker.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sviete/AIS-WWW/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
