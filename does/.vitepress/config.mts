import { defineConfig  } from 'vitepress'
import { nav as navbar, sidebar } from './relaConf'
import { search } from './utils/search'
/* 网页根据浏览器语言来进行跳转，显示中英文判断 */
export default defineConfig({
  base: "/chint" ,
  head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
  title: "chint",
  lang:'zh',
  description: "A VitePress Site",
  themeConfig: {
    siteTitle: 'chint',
    logo: '/favicon.ico',
    nav: navbar,
    /* 侧边导航栏 */
    sidebar: sidebar,
    outline: {
      level: 'deep',
      label: '目录'
    },
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    i18nRouting: true,
    footer: {
      copyright: '上海正泰系统有限公司后台管理系统'
    },
    // 设置搜索框的样式
    search:search,
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
  },
  cleanUrls: true,
})
