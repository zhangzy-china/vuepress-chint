import { useData } from 'vitepress'


export const sidebar = [
    {
        text: '电站管理',
        collapsed: false,
        items: [
            { text: '电站中心', link: '/plant/station-center' },
            { text: '网关中心', link: '/plant/gateway-center', },
            { text: '设备中心', link: '/plant/device-center', },
        ]
    }, {
        text: '维护服务',
        collapsed: false,
        items: [
            { text: 'IV曲线', link: '/maintenance/iv-center' },
            { text: '告警列表', link: '/maintenance/alarm-center' },
            { text: '日志管理', link: '/maintenance/logs-center' },
        ]
    }
]