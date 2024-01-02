//框架核心配置
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        share: true,
        shareTitle: '模板小程序',
        homePath: '/pages/index/index',
        tabBar: [],
    }
})