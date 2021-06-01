/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '《社交网络技术与应用》 项目报告',
  tagline: '日本排放核废水事件为主题的社交媒体分析',
  url: 'https://NaNaSeNishi.github.io',
  baseUrl: '/SN_Front_End/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/wa2Icon.jpg',
  organizationName: 'NaNaSeNishi', // Usually your GitHub org/user name.
  projectName: 'SN_Front_End', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Social Network ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wa2Icon.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Report',
        },
        {to: '/blog', label: 'About', position: 'left'},
        {
          href: 'https://github.com/NaNaSeNishi/SN_Front_End',
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
              label: 'Report',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Weibo',
              href: 'https://weibo.com/u/5554866845',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Ckucky_lalala',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NaNaSeNishi/SN_Front_End',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 社交网络技术与应用课程小组 . Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/NaNaSeNishi/SN_Front_End',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NaNaSeNishi/SN_Front_End/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
