import { Schema } from '../../common/schema'
import { performanceMonitor } from './perfomance'

export default function load(
    report: <T extends keyof Schema>(type: T, data: Schema[T], lazy?: boolean) => void
) {
    // 监控 js 错误
    window.addEventListener('error', (e) => {
        if (e.error) {
            report(
                'jsError',
                {
                    msg: e.error.message,
                    line: e.error.lineNumber,
                    column: e.error.columnNumber,
                    error: e.error.stack,
                    pageURL: e.error.fileName,
                    startTime: e.timeStamp,
                },
                false
            )
        }
    })

    // 监控资源异常
    window.addEventListener(
        'error',
        (e) => {
            const target = e.target as HTMLImageElement & HTMLBaseElement
            if (!target) return

            if (target.src || target.href) {
                console.log(e)
                const url = target.src || target.href
                report(
                    'resourceError',
                    {
                        url,
                        startTime: e.timeStamp,
                        html: target.outerHTML,
                        resourceType: target.tagName,
                        pageURL: window.location.href,
                    },
                    false
                )
            }
        },
        true
    )

    // 性能指标
    window.addEventListener('load', () => {
            console.log(performanceMonitor.getAllAPIs());
            report({
                DOMCompleteTime: performanceMonitor.getDOMCompleteTime()
            }, true);
        }
    )
}
