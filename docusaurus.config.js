const path = require('path')

module.exports = {
    title: "DrReMain's Lab",
    // tagline: 'Adversity makes a man wise, not rich.',
    url: "https://drremain.cn",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "drremain", // Usually your GitHub org/user name.
    projectName: "DrReMain", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "",
            logo: {
                alt: "drremain",
                src: "img/logo.png",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "文章",
                    position: "left",
                },
                // {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: "https://github.com/DrReMain",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //   {
            //     title: '社区',
            //     items: [
            //       {
            //         label: '掘金',
            //         href: 'https://juejin.cn/user/2858385962182077',
            //       },
            //       {
            //         label: 'stackoverflow',
            //         href: 'https://stackoverflow.com/users/12681046/dr-remain',
            //       },
            //     ],
            //   },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} DrReMain.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/DrReMain/DrReMain/issues",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/DrReMain/DrReMain/issues",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    cacheTime: 600 * 1000,
                    changefreq: 'weekly',
                    priority: 0.5,
                    trailingSlash: false,
                }
            },
        ],
    ],
    plugins: [
        path.resolve(__dirname, './sourcemap-docusaurus-plugin')
    ]
};
