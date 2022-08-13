// @ts-nocheck
// w3c的api, ts检测不到, 其他方法比较费时所以还是nocheck了

// 首屏加载的数据在load事件中触发，其他性能指标根据需求选择性调用方法获取
export const performanceMonitor = {
    // 向服务端上传数据

    // TODO: 仅开发环境使用
    getAllAPIs: () => {
        return window.performance
    },
    // 首屏渲染时间
    getFPTime: () => {
        return window.performance;
    },
    // 首次有内容渲染时间
    getFCPTime: () => {
        return window.performance;
    },
    // dom渲染完成时间
    getDOMCompleteTime: () => {
        const [{ domComplete }] = performance.getEntriesByType('navigation');
        return domComplete;
    }
}