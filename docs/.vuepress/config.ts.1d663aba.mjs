// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Paggie Vuepress Blog",
  description: "Paggie&#x27;s VuePress Blog ",
  // head: [
  //   // 配置站点图标
  //   ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  // ],
  head: [
    // Configure site icon (favicon) with a local image
    ["link", { rel: "icon", type: "image/png", href: "/images/background.jpg" }]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    profile: {
      name: "Paggie",
      description: "Paggie from Taiwan, Data scientist/ analyst",
      avatar: "/images/paggie_img_2.png",
      // Corrected path
      location: "Adelaide, South Australia",
      organization: "Future Education in Unisa",
      circle: true,
      // 是否为圆形头像
      layout: "right"
      // 个人信息在左侧还是右侧，'left' | 'right'
    },
    // 社交链接
    social: [
      { icon: "github", link: "https://github.com/vuepress-theme-plume" }
      // ... more
    ],
    // })
    // })
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 博客
    //  * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },
    /* 博客文章页面链接前缀 */
    article: "/article/",
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      //   // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      //   lineNumbers: true, // 启用行号
      // },
      /* 本地搜索, 默认启用 */
      // search: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  :[icon-name]:
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      //   demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      // },
      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,
      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    }
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BlaS15aWxpdS9Eb2N1bWVudHMvR2l0SHViL3Z1ZS1wcmVzcy1ibG9nL3Z1ZXByZXNzX2Jsb2cvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wZWkteWlsaXUvRG9jdW1lbnRzL0dpdEh1Yi92dWUtcHJlc3MtYmxvZy92dWVwcmVzc19ibG9nL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGVpLXlpbGl1L0RvY3VtZW50cy9HaXRIdWIvdnVlLXByZXNzLWJsb2cvdnVlcHJlc3NfYmxvZy9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXG5pbXBvcnQgeyBwbHVtZVRoZW1lIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiAnLycsXG4gIGxhbmc6ICdlbi1VUycsXG4gIHRpdGxlOiAnUGFnZ2llIFZ1ZXByZXNzIEJsb2cnLFxuICBkZXNjcmlwdGlvbjogJ1BhZ2dpZSYjeDI3O3MgVnVlUHJlc3MgQmxvZyAnLFxuXG4gIC8vIGhlYWQ6IFtcbiAgLy8gICAvLyBcdTkxNERcdTdGNkVcdTdBRDlcdTcwQjlcdTU2RkVcdTY4MDdcbiAgLy8gICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJ2h0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZmF2aWNvbi0zMngzMi5wbmcnIH1dLFxuICAvLyBdLFxuXG4gIGhlYWQ6IFtcbiAgICAvLyBDb25maWd1cmUgc2l0ZSBpY29uIChmYXZpY29uKSB3aXRoIGEgbG9jYWwgaW1hZ2VcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnIH1dLFxuICBdLFxuICBcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLCAvLyBcdTdBRDlcdTcwQjlcdThGODNcdTU5MjdcdUZGMENcdTk4NzVcdTk3NjJcdTY1NzBcdTkxQ0ZcdThGODNcdTU5MUFcdTY1RjZcdUZGMENcdTRFMERcdTVFRkFcdThCQUVcdTU0MkZcdTc1MjhcblxuICB0aGVtZTogcGx1bWVUaGVtZSh7XG4gICAgcHJvZmlsZToge1xuICAgICAgbmFtZTogJ1BhZ2dpZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BhZ2dpZSBmcm9tIFRhaXdhbiwgRGF0YSBzY2llbnRpc3QvIGFuYWx5c3QnLFxuICAgICAgYXZhdGFyOiAnL2ltYWdlcy9wYWdnaWVfaW1nXzIucG5nJywgIC8vIENvcnJlY3RlZCBwYXRoXG4gICAgICBsb2NhdGlvbjogJ0FkZWxhaWRlLCBTb3V0aCBBdXN0cmFsaWEnLFxuICAgICAgb3JnYW5pemF0aW9uOiAnRnV0dXJlIEVkdWNhdGlvbiBpbiBVbmlzYScsXG4gICAgICBjaXJjbGU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NEUzQVx1NTcwNlx1NUY2Mlx1NTkzNFx1NTBDRlxuICAgICAgbGF5b3V0OiAncmlnaHQnLCAvLyBcdTRFMkFcdTRFQkFcdTRGRTFcdTYwNkZcdTU3MjhcdTVERTZcdTRGQTdcdThGRDhcdTY2MkZcdTUzRjNcdTRGQTdcdUZGMEMnbGVmdCcgfCAncmlnaHQnXG4gICAgfSxcbiAgICAvLyBcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcbiAgICBzb2NpYWw6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtdGhlbWUtcGx1bWUnIH0sXG4gICAgICAvLyAuLi4gbW9yZVxuIF0sXG4gIC8vIH0pXG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8qIFx1NkRGQlx1NTJBMFx1NjBBOFx1NzY4NFx1OTBFOFx1N0Y3Mlx1NTdERlx1NTQwRCwgXHU2NzA5XHU1MkE5XHU0RThFIFNFTywgXHU3NTFGXHU2MjEwIHNpdGVtYXAgKi9cbiAgICAvLyBob3N0bmFtZTogJ2h0dHBzOi8veW91cl9zaXRlX3VybCcsXG5cbiAgICAvKiBcdTY1ODdcdTY4NjNcdTRFRDNcdTVFOTNcdTkxNERcdTdGNkVcdUZGMENcdTc1MjhcdTRFOEUgZWRpdExpbmsgKi9cbiAgICAvLyBkb2NzUmVwbzogJycsXG4gICAgLy8gZG9jc0RpcjogJ2RvY3MnLFxuICAgIC8vIGRvY3NCcmFuY2g6ICcnLFxuXG4gICAgLyogXHU5ODc1XHU1MTg1XHU0RkUxXHU2MDZGICovXG4gICAgLy8gZWRpdExpbms6IHRydWUsXG4gICAgLy8gbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gY29udHJpYnV0b3JzOiB0cnVlLFxuICAgIC8vIGNoYW5nZWxvZzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBcdTUzNUFcdTVCQTJcbiAgICAvLyAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNibG9nXG4gICAgICovXG4gICAgLy8gYmxvZzogZmFsc2UsIC8vIFx1Nzk4MVx1NzUyOFx1NTM1QVx1NUJBMlxuICAgIC8vIGJsb2c6IHtcbiAgICAvLyAgIHBvc3RMaXN0OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTY1ODdcdTdBRTBcdTUyMTdcdTg4NjhcdTk4NzVcbiAgICAvLyAgIHRhZ3M6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjgwN1x1N0I3RVx1OTg3NVxuICAgIC8vICAgYXJjaGl2ZXM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NUY1Mlx1Njg2M1x1OTg3NVxuICAgIC8vICAgY2F0ZWdvcmllczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MjA2XHU3QzdCXHU5ODc1XG4gICAgLy8gICBwb3N0Q292ZXI6ICdyaWdodCcsIC8vIFx1NjU4N1x1N0FFMFx1NUMwMVx1OTc2Mlx1NEY0RFx1N0Y2RVxuICAgIC8vICAgcGFnaW5hdGlvbjogMTUsIC8vIFx1NkJDRlx1OTg3NVx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1NjU3MFx1OTFDRlxuICAgIC8vIH0sXG5cbiAgICAvKiBcdTUzNUFcdTVCQTJcdTY1ODdcdTdBRTBcdTk4NzVcdTk3NjJcdTk0RkVcdTYzQTVcdTUyNERcdTdGMDAgKi9cbiAgICBhcnRpY2xlOiAnL2FydGljbGUvJyxcblxuICAgIC8qKlxuICAgICAqIFx1N0YxNlx1OEJEMVx1N0YxM1x1NUI1OFx1RkYwQ1x1NTJBMFx1NUZFQlx1N0YxNlx1OEJEMVx1OTAxRlx1NUVBNlxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2NhY2hlXG4gICAgICovXG4gICAgY2FjaGU6ICdmaWxlc3lzdGVtJyxcblxuICAgIC8qKlxuICAgICAqIFx1NEUzQSBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTgxRUFcdTUyQThcdTZERkJcdTUyQTAgZnJvbnRtYXR0ZXIgXHU5MTREXHU3RjZFXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jYXV0b2Zyb250bWF0dGVyXG4gICAgICovXG4gICAgLy8gYXV0b0Zyb250bWF0dGVyOiB7XG4gICAgLy8gICBwZXJtYWxpbms6IHRydWUsICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcbiAgICAvLyAgIGNyZWF0ZVRpbWU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NTIxQlx1NUVGQVx1NjVGNlx1OTVGNFxuICAgIC8vICAgdGl0bGU6IHRydWUsICAgICAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU2ODA3XHU5ODk4XG4gICAgLy8gfSxcblxuICAgIHBsdWdpbnM6IHtcbiAgICAgIC8qKlxuICAgICAgICogU2hpa2kgXHU0RUUzXHU3ODAxXHU5QUQ4XHU0RUFFXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvY29kZS1oaWdobGlnaHQvXG4gICAgICAgKi9cbiAgICAgIC8vIHNoaWtpOiB7XG4gICAgICAvLyAgIC8vIFx1NUYzQVx1NzBDOFx1NUVGQVx1OEJBRVx1OTg4NFx1OEJCRVx1NEVFM1x1NzgwMVx1NTc1N1x1OUFEOFx1NEVBRVx1OEJFRFx1OEEwMFx1RkYwQ1x1NjNEMlx1NEVGNlx1OUVEOFx1OEJBNFx1NTJBMFx1OEY3RFx1NjI0MFx1NjcwOVx1OEJFRFx1OEEwMFx1NEYxQVx1NEVBN1x1NzUxRlx1NEUwRFx1NUZDNVx1ODk4MVx1NzY4NFx1NjVGNlx1OTVGNFx1NUYwMFx1OTUwMFxuICAgICAgLy8gICBsYW5ndWFnZXM6IFsnc2hlbGwnLCAnYmFzaCcsICd0eXBlc2NyaXB0JywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIC8vICAgdHdvc2xhc2g6IHRydWUsIC8vIFx1NTQyRlx1NzUyOCB0d29zbGFzaFxuICAgICAgLy8gICB3aGl0ZXNwYWNlOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggXHU3QTdBXHU2ODNDL1RhYiBcdTlBRDhcdTRFQUVcbiAgICAgIC8vICAgbGluZU51bWJlcnM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1NTNGN1xuICAgICAgLy8gfSxcblxuICAgICAgLyogXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyLCBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjggKi9cbiAgICAgIC8vIHNlYXJjaDogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGdvbGlhIERvY1NlYXJjaFxuICAgICAgICogXHU1NDJGXHU3NTI4XHU2QjY0XHU2NDFDXHU3RDIyXHU5NzAwXHU4OTgxXHU1QzA2IFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiBzZWFyY2ggXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvc2VhcmNoLyNhbGdvbGlhLWRvY3NlYXJjaFxuICAgICAgICovXG4gICAgICAvLyBkb2NzZWFyY2g6IHtcbiAgICAgIC8vICAgYXBwSWQ6ICcnLFxuICAgICAgLy8gICBhcGlLZXk6ICcnLFxuICAgICAgLy8gICBpbmRleE5hbWU6ICcnLFxuICAgICAgLy8gfSxcblxuICAgICAgLyogXHU2NTg3XHU3QUUwXHU1QjU3XHU2NTcwXHU3RURGXHU4QkExXHUzMDAxXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XHVGRjBDXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlIFx1NTIxOVx1Nzk4MVx1NzUyOCAqL1xuICAgICAgLy8gcmVhZGluZ1RpbWU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogbWFya2Rvd24gZW5oYW5jZVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL21hcmtkb3duLWVuaGFuY2UvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duRW5oYW5jZToge1xuICAgICAgLy8gICBjaGFydGpzOiB0cnVlLFxuICAgICAgLy8gICBlY2hhcnRzOiB0cnVlLFxuICAgICAgLy8gICBtZXJtYWlkOiB0cnVlLFxuICAgICAgLy8gICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqICBtYXJrZG93biBwb3dlclxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW4vbWFya2Rvd24tcG93ZXIvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duUG93ZXI6IHtcbiAgICAgIC8vICAgcGRmOiB0cnVlLCAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggUERGIFx1NUQ0Q1x1NTE2NSBAW3BkZl0oL3h4eC5wZGYpXG4gICAgICAvLyAgIGNhbml1c2U6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4IGNhbml1c2UgXHU4QkVEXHU2Q0Q1ICBAW2Nhbml1c2VdKGZlYXR1cmVfbmFtZSlcbiAgICAgIC8vICAgcGxvdDogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTk2OTBcdTc5RDhcdTY1ODdcdTY3MkNcdThCRURcdTZDRDUgISF4eHh4ISFcbiAgICAgIC8vICAgYmlsaWJpbGk6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYmlsaWJpbGlcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYmlsaWJpbGldKGJpZClcbiAgICAgIC8vICAgeW91dHViZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgeW91dHViZVx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFt5b3V0dWJlXSh2aWRlb19pZClcbiAgICAgIC8vICAgYXJ0UGxheWVyOiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYXJ0UGxheWVyIFx1NjcyQ1x1NTczMFx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFthcnRQbGF5ZXJdKHVybClcbiAgICAgIC8vICAgYXVkaW9SZWFkZXI6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjVcdTk3RjNcdTk4OTFcdTY3MTdcdThCRkJcdTUyOUZcdTgwRkQgXHU4QkVEXHU2Q0Q1IEBbYXVkaW9SZWFkZXJdKHVybClcbiAgICAgIC8vICAgaWNvbnM6IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTUxODVcdTdGNkVcdTU2RkVcdTY4MDdcdThCRURcdTZDRDUgIDpbaWNvbi1uYW1lXTpcbiAgICAgIC8vICAgY29kZXBlbjogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZXBlbiBcdThCRURcdTZDRDUgQFtjb2RlcGVuXSh1c2VyL3NsYXNoKVxuICAgICAgLy8gICByZXBsaXQ6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSByZXBsaXQgXHU4QkVEXHU2Q0Q1IEBbcmVwbGl0XSh1c2VyL3JlcGwtbmFtZSlcbiAgICAgIC8vICAgY29kZVNhbmRib3g6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZVNhbmRib3ggXHU4QkVEXHU2Q0Q1IEBbY29kZVNhbmRib3hdKGlkKVxuICAgICAgLy8gICBqc2ZpZGRsZTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBqc2ZpZGRsZSBcdThCRURcdTZDRDUgQFtqc2ZpZGRsZV0odXNlci9pZClcbiAgICAgIC8vICAgbnBtVG86IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjggbnBtLXRvIFx1NUJCOVx1NTY2OCAgOjo6IG5wbS10b1xuICAgICAgLy8gICBkZW1vOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBkZW1vIFx1NUJCOVx1NTY2OCAgOjo6IGRlbW9cbiAgICAgIC8vICAgcmVwbDogeyAgICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggXHU0RUUzXHU3ODAxXHU2RjE0XHU3OTNBXHU1QkI5XHU1NjY4XG4gICAgICAvLyAgICAgZ286IHRydWUsICAgICAgICAgLy8gOjo6IGdvLXJlcGxcbiAgICAgIC8vICAgICBydXN0OiB0cnVlLCAgICAgICAvLyA6OjogcnVzdC1yZXBsXG4gICAgICAvLyAgICAga290bGluOiB0cnVlLCAgICAgLy8gOjo6IGtvdGxpbi1yZXBsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIGltYWdlU2l6ZTogJ2xvY2FsJywgLy8gXHU1NDJGXHU3NTI4IFx1ODFFQVx1NTJBOFx1NTg2Qlx1NTE0NSBcdTU2RkVcdTcyNDdcdTVCQkRcdTlBRDhcdTVDNUVcdTYwMjdcdUZGMENcdTkwN0ZcdTUxNERcdTk4NzVcdTk3NjJcdTYyOTZcdTUyQThcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU1NzI4IE1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NEUyRFx1NUJGQ1x1NTE2NVx1NTE3Nlx1NEVENiBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcdTMwMDJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9tYXJrZG93bi9pbmNsdWRlL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bkluY2x1ZGU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogTWFya2Rvd24gXHU2NTcwXHU1QjY2XHU1MTZDXHU1RjBGXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvbWFya2Rvd24tbWF0aC9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25NYXRoOiB7XG4gICAgICAvLyAgIHR5cGU6ICdrYXRleCcsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1NkMzNFx1NTM3MFxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL3dhdGVybWFyay9cbiAgICAgICAqL1xuICAgICAgLy8gd2F0ZXJtYXJrOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1OEJDNFx1OEJCQSBjb21tZW50c1xuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2NvbW1lbnRzL1xuICAgICAgICovXG4gICAgICAvLyBjb21tZW50OiB7XG4gICAgICAvLyAgIHByb3ZpZGVyOiAnJywgLy8gXCJBcnRhbGtcIiB8IFwiR2lzY3VzXCIgfCBcIlR3aWtvb1wiIHwgXCJXYWxpbmVcIlxuICAgICAgLy8gICBjb21tZW50OiB0cnVlLFxuICAgICAgLy8gICByZXBvOiAnJyxcbiAgICAgIC8vICAgcmVwb0lkOiAnJyxcbiAgICAgIC8vICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgLy8gICBjYXRlZ29yeUlkOiAnJyxcbiAgICAgIC8vICAgbWFwcGluZzogJ3BhdGhuYW1lJyxcbiAgICAgIC8vICAgcmVhY3Rpb25zRW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8vICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBcdTUyQTBcdTVCQzZcdTUyOUZcdTgwRkRcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvZW5jcnlwdGlvbi9cbiAgICAgKi9cbiAgICAvLyBlbmNyeXB0OiB7fSxcbiAgfSksXG5cblxuXG5cblxuXG5cblxuXG5cblxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1ksU0FBUyxtQkFBbUI7QUFDM2EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9iLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sYUFBYSxNQUFNLHlCQUF5QixDQUFDO0FBQUEsRUFDN0U7QUFBQSxFQUVBLFNBQVMsWUFBWTtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsT0FBTyxXQUFXO0FBQUEsSUFDaEIsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUE7QUFBQSxNQUNSLFFBQVE7QUFBQTtBQUFBLElBQ1Y7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sRUFBRSxNQUFNLFVBQVUsTUFBTSwwQ0FBMEM7QUFBQTtBQUFBLElBRXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUErQ0csU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNVCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF1R1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPRixDQUFDO0FBWUgsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
