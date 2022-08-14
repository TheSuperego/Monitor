// @ts-nocheck
// performance是w3c的api, ts检测不到, 
// 其他方法比较费时所以还是nocheck了
// 如果有大佬帮忙写一下type文件那就可以check了

// 首屏加载的数据在load事件中触发，
// 其他性能指标根据需求选择性调用方法获取
// TODO: 完善下述方法
export const performanceMonitor = {
    // 仅在开发环境下启用这个方法
    showAllApis: () => {
        const apis = {
            all: performance,
            memory: performance.getEntriesByType('memory'),
            navigation: performance.getEntriesByType('navigation'),
            timing: performance.getEntriesByType('timing')
        }
        return apis
    },
    // FP首屏渲染时间
    getFirstPaintTime: () => {
        const arr = [];
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntriesByName('first-paint')) {
              arr.push(entry);
            }
          }).observe({ type: 'paint', buffered: true });
        return arr;      
    },
    // FCP首次有内容渲染时间
    getFirstContentPaintTime: () => {
        const arr = [];
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
                arr.push(entry);
            }
        }).observe({ type: 'paint', buffered: true });
        return arr;
    },
    // FMP首次有意义内容的绘制时间
    // TODO: 确定什么内容是有意义的
    getFirstMeaningPaintTime: (content: any[]) => {

    },
    // DOM渲染完成时间
    getDOMCompleteTime: () => {
        const [{ domComplete }] = performance.getEntriesByType('navigation');
        return domComplete;
    },
    // 最大卡顿时间
    getMaxBlockTime: () => {
        return ;
    },
    // 白屏时间
    getWhiteScreenTime: () => {
        return ;
    },
    // 关键请求用时
    getRequestBlockTime: (request?: any) => {
        return ;
    },
    // 请求成功率（？）
    getRequestSuccessRate: (request?: any) => {
        // 两种方案：
        // 一是根据当前请求用时,人为的给出一个阶梯函数概率
        // 比如请求用时0ms时概率100%，请求用时2ms时概率98%，请求用时2s时概率50%，请求20s时概率0
        // 二是基于统计学，统计每次请求，把数据交给服务端，从服务端获取概率
        return 1;
    },
    // 重定向时间
    getRedirectTime: () => {
        return ;
    },
    // DNS解析时间
    getDNSTime: () => {
        const [{ domainLookupEnd, domainLookupStart }] = performance.getEntriesByType('navigation');
        return domainLookupEnd - domainLookupStart;
    },
    // 资源加载时间
    getLoadingTime: () => {

    },
    // http请求次数
    getHttpRequestTimes: () => {

    }

    // 欢迎补充其他指标owo:
}