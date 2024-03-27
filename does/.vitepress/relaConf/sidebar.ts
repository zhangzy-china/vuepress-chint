import { useData } from 'vitepress'


export const sidebar = [
    {
        text: '简介',
        collapsed: false,
        items: [
            { text: '关于本手册', link: '/Introduction/manual' },
            { text: '首页', link: '/Introduction/homepage' },
        ]
    },
    {
        text: '常用功能',
        collapsed: false,
        link: '/feature/index',
        items: [
            { text: '登录账号', link: '/feature/login' },
            { text: '注册账号', link: '/feature/register' },
            { text: '重置密码', link: '/feature/password' },
        ]
    },
    {
        text: '电站相关',
        link: '/plant/plant-index',
        collapsed: false,
        items: [
            {
                text: '电站详情',
                link: '/plant/station',
                collapsed: false,
                items: [
                    { text: '电站概览', link: '/plant/overview' },
                    { text: '电站发电量', link: '/plant/power' },
                    { text: '电站告警', link: '/plant/alarm' },
                    { text: '远程设置', link: '/plant/remote-setting' },
                ]
            },
            { text: '新建电站', link: '/plant/add-station' },
            { text: '电站贡献', link: '/plant/contribute' },
            { text: '分配电站', link: '/plant/allocation' },
        ]
    },
    {
        text: '网关相关',
        link: '/gateway/gateway-index',
        collapsed: false,
        items: [{
            text: '网关详情',
            collapsed: false,
            link:'/gateway/detail',
            items: [
                { text: '网关概览', link: '/gateway/overview' },
                { text: '网关日志', link: '/gateway/logs' },
                { text: '网关设置', link: '/gateway/setting' },
                { text: '网关远程读写', link: '/gateway/read-write' },
                { text: '网关升级记录', link: '/gateway/upgrade' },
            ]
        }
        ],
    },
    {
        text:'设备中心',
        link: '/device/device-index',
        collapsed: false,
        items:[
            { text: '设备详情', link: '/device/detail',items:[
                { text: '设备概览', link: '/device/overview' },
                { text: '图标数据', link: '/device/chart' },
                { text: '事件告警', link: '/device/alarm' },
                { text: '数据', link: '/device/data' },
                { text: '发电量', link: '/device/power' },
                { text: '远程设置', link: '/device/remote-setting' },
                { text: '模式', link: '/device/mode' },
                { text: '智能负载', link: '/device/load' },
                { text: '升级历史记录', link: '/device/upgrade' },
            ]},

        ]

    },
    {
        text: '维护服务',
        collapsed: false,
        items: [
            { text: 'IV曲线', link: '/maintenance/iv-center' },
            { text: '告警列表', link: '/maintenance/alarm-center' },
            { text: '日志管理', link: '/maintenance/logs-center' },
        ]
    }
]