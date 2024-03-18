import { defineConfig } from 'vitepress'
import { nav as navbar } from './relaConf'
import { set_sidebar } from "./utils/auto-sidebar.js";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
/* 网页根据浏览器语言来进行跳转，显示中英文判断 */
export default defineConfig({
  base: "vuepress-chint",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  lang: 'zh-CN',
  title: "chint",
  description: "A VitePress Site",
  themeConfig: {
    langMenuLabel: 'zh-CN',
    logo: '/favicon.ico',
    nav: navbar,
    /* 侧边导航栏 */
    // sidebar: [
    //   {
    //     text: '电站',
    //     collapsed: false,
    //     items: [
    //       {
    //         link: '/station/index',
    //         items: [
    //           { text: '电站1', link: '/station/station-one' },
    //           { text: '电站2' },
    //           { text: '电站3' },
    //         ]
    //       },

    //     ]
    //   },
    //   {
    //     text: '网关中心',
    //     collapsed: false,
    //     items: [
    //       { text: '电站1', link: '/api-examples' },
    //       { text: '电站2' },
    //       { text: '电站3' },
    //     ]
    //   }
    // ],
    sidebar: { "/station/detail": set_sidebar("station/detail") },
    outline: {
      level: 'deep',
      label: '目录'
    },
    i18nRouting: true,
    footer: {
      copyright: '上海正泰系统有限公司后台管理系统'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
})
