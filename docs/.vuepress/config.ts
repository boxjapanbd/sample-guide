import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

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
  },
});
