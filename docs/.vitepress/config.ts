import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Java学习笔记',
    titleTemplate: 'Get what you want.',
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: '微服务', link: '/微服务/', activeMatch: '/微服务/'},
            {
                text: '更多', activeMatch: '/更多/', items: [
                    {text: '内网穿透', link: '/更多/内网穿透'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Lucky-Ya-Q/java-study-note'}
        ],

        sidebar: {
            '微服务': [
                {
                    text: 'Spring Cloud',
                    items: [
                        {text: 'Ribbon 负载均衡', link: '/微服务/Ribbon 负载均衡'},
                        {text: 'Gateway 服务网关', link: '/微服务/Gateway 服务网关'}
                    ]
                },
                {
                    text: 'Spring Cloud Alibaba',
                    items: [
                        {text: 'Nacos 注册中心', link: '/微服务/Nacos 注册中心'},
                        {text: 'Nacos 配置中心', link: '/微服务/Nacos 配置中心'},
                        {text: 'Sentinel 流量治理', link: '/微服务/Sentinel 流量治理'},
                        {text: 'Seata 分布式事务', link: '/微服务/Seata 分布式事务'}
                    ]
                }
            ]
        },

        outline: {label: '本页目录'},
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
