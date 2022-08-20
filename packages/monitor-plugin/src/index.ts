import { addCache, getCache, clearCache, isCacheEmpty } from './cache'
import { randomUUID, addEventListener } from './utils'
import load from './plugins'
import { Schema } from '../../common/schema'
import { ff } from './fade'

declare const window: Window & { pageStartTime: any,pageEndTime:any };
const originalXMLSend = XMLHttpRequest.prototype.send
const sendFunction: (url: string, data: BoxedReportData) => void = window.navigator?.sendBeacon
    ? (url, data) => window.navigator.sendBeacon(url, JSON.stringify(data))
    : (url, data) => {
          const xhr = new XMLHttpRequest()
          xhr.open('post', url)
          originalXMLSend.call(xhr, JSON.stringify(data))
      }

export type ReportData = Schema[keyof Schema]

export interface MonitorConfig {
    url: string
    reportInterval?: number
}
export interface BoxedReportData {
    sessionId: string
    data: ReportData[]
}

export let report: <T extends keyof Schema>(type: T, data: Schema[T], lazy?: boolean) => void

export const init = (config: MonitorConfig) => {
    if (!config.url) {
        console.error('请设置上传 url 地址')
        return
    }

    window.pageStartTime = Date.now()

    const sessionId = randomUUID()
    // 向服务端上报
    const send = () => {
        if (!isCacheEmpty()) {
            sendFunction(config.url, {
                sessionId,
                data: getCache(),
            })

            clearCache()
        }
    }

    // 缓存数据信息，或者向服务端上报
    report = (type, data, lazy = true) => {
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
    //设置白屏时间结束时间点（由于时间太小所以设置了一个延时函数用于区别）
    setTimeout("window.pageEndTime = Date.now()",500);
    
    console.log('Web Monitor started!')
   
}

export { fade } from './fade'
