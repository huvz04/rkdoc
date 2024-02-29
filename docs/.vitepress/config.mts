import { defineConfig } from "vitepress";
var about = "/markdown-info"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NetworkU文档",
  description: "NetworkU文档",
  
  themeConfig: {
    siteTitle: "NetworkU文档",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "用户文档", link: about },
    ],

    sidebar: [
      {
        text: "快速开始",
        items: [
          { text: "传送门", link: "/about" },
          {
            text: "叨叨念",
            link: about,
          },
          
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/huvz04" }],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2024 <a href="https://github.com/huvz04">huvz04</a>',
    },
  },
});
