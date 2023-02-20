// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rewards Credit Card API",
  tagline: "The Universal Credit Protocol",
  url: "https://ahmedbargady.me",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "logo.png",
  organizationName: "xxxx",
  projectName: "docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    autoCollapseSidebarCategories: true,
    // algolia: {
    //   apiKey: "xxxx",
    //   appId: "xxxx",
    //   indexName: "prod_index",
    // },
    navbar: {
      logo: {
        alt: "LOGO",
        src: "logo.png",
      },
      title: "Rewards Credit Card API",
      items: [
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",

      copyright: `Copyright © ${new Date().getFullYear()} Rewards credit card API.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["solidity"],
    },
  },
};

module.exports = config;
