import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

// import {navbar, sidebar} from "./configs"
import {navbar} from "./configs/navbar";
import {sidebar} from "./configs/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "ja-JP",
  title: "クイックスタートガイド",
  description: "Just playing around",
  base: (process.env.NODE_ENV === "development") ? "/" : "/sample-guide/",
  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: navbar,
    sidebar: sidebar
    // navbar: [
    //   {
    //     text: "Guide",
    //     link: "/guide/"
    //   }
    // ]
  },

});
