import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Java学习笔记',
    titleTemplate: '不积跬步，无以至千里',
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: '微服务', link: '/微服务/', activeMatch: '/微服务/'}
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Lucky-Ya-Q/java-study-note'}
        ],

        sidebar: {
            'markdown-examples': [
                {
                    text: 'Examples',
                    items: [
                        {text: 'Markdown Examples', link: '/markdown-examples'},
                        {text: 'Runtime API Examples', link: '/api-examples'}
                    ]
                }
            ],
            '微服务': [
                {
                    text: '微服务',
                    items: [
                        {text: 'Nacos 注册中心', link: '/微服务/Nacos 注册中心'},
                        {text: 'Nacos 配置中心', link: '/微服务/Nacos 配置中心'},
                        {text: 'Sentinel 流量治理', link: '/微服务/Sentinel 流量治理'}
                    ]
                }
            ]
        },

        editLink: {
            pattern: 'https://github.com/Lucky-Ya-Q/java-study-note/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {text: '最近更新时间'},
        docFooter: {prev: '上一页', next: '下一页'},
        footer: {
            copyright: 'Copyright © 2023-present <a href="https://www.shanyexia.top">山野下</a>'
        }
    }
})
