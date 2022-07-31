import { ReportData } from './cache'

export default function load(
    report: (data: ReportData, lazy?: boolean) => void
) {

    // 监控 js 错误
    window.onerror = (msg, url, line, column, error) => {
        report(
            {
                msg,
                line,
                column,
                error: error?.stack,
                subType: 'js',
                pageURL: url,
                type: 'error',
                startTime: performance.now(),
            },
            false
        )
    }

    // 监控资源异常
    window.addEventListener(
        'error',
        e => {
            const target = e.target as any
            if (!target) return

            if (target.src || target.href) {
                const url = target.src || target.href
                report(
                    {
                        url,
                        type: 'error',
                        subType: 'resource',
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
}