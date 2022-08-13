import { ReportData, addCache, getCache, clearCache, isCacheEmpty } from './cache'
import { randomUUID } from './utils'
import load from './plugins'

const originalXMLSend = XMLHttpRequest.prototype.send
const sendFunction: (url: string, data: BoxedReportData) => void = window.navigator?.sendBeacon
    ? (url, data) => window.navigator.sendBeacon(url, JSON.stringify(data))
    : (url, data) => {
          const xhr = new XMLHttpRequest()
          xhr.open('post', url)
          originalXMLSend.call(xhr, JSON.stringify(data))
      }

export { ReportData }
export interface MonitorConfig {
    url: string
    reportInterval?: number
}
export interface BoxedReportData {
    sessionId: string
    data: ReportData[]
}

export let report: (data: ReportData, lazy?: boolean) => void

export const init = (config: MonitorConfig) => {
    if (!config.url) {
        console.error('请设置上传 url 地址')
        return
    }

    const sessionId = randomUUID()
    // 向服务端上报
    const send = () => {
        if (!isCacheEmpty()) {
            sendFunction(config.url, {
                sessionId,
                data: getCache()
            })

            clearCache()
        }
    }
    // 缓存数据信息，或者向服务端上报
    report = (data, lazy = true) => {
        addCache(data)
        if (!lazy) {
            send()
        }
    }
    // 设置定时器轮询,定时向服务端上报信息
    const reportInterval = config.reportInterval ?? 1000 * 60
    setInterval(send, reportInterval)

    window.addEventListener('beforeunload', send, true)
    // 挂载错误监听等事件,并将report作为其处理方法
    load(report)

    console.log('Web Monitor started!')
}
