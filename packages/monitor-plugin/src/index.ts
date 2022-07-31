import { ReportData, addCache, getCache, clearCache, isCacheEmpty } from './cache'
import { randomUUID } from './utils'
import load from './plugins'

interface MonitorConfig {
	url: string
	reportInterval?: number
}
interface BoxedReportData {
	sessionId: string
	data: ReportData[]
}

interface Monitor {
	report: ((data: ReportData, lazy?: boolean) => void) | (() => void)
	init: (this: Monitor, config: MonitorConfig) => Monitor | void
}

const originalXMLSend = XMLHttpRequest.prototype.send
const sendFunction: (url: string, data: BoxedReportData) => void = !!window.navigator?.sendBeacon
	? (url, data) => window.navigator.sendBeacon(url, JSON.stringify(data))
	: (url, data) => {
			const xhr = new XMLHttpRequest()
			xhr.open('post', url)
			originalXMLSend.call(xhr, JSON.stringify(data))
	  }

const monitor: Monitor = {
	report: () => {},
	init(this: Monitor, config: MonitorConfig) {
		if (!config.url) {
			console.error('请设置上传 url 地址')
			return
		}

		const sessionId = randomUUID()

		const send = () => {
			if (!isCacheEmpty()) {
				sendFunction(config.url, {
					sessionId,
					data: getCache()
				})

				clearCache()
			}
		}

		this.report = (data, lazy = true) => {
			addCache(data)
			if (!lazy) {
				send()
			}
		}

		const reportInterval = config.reportInterval ?? 1000 * 60
		setInterval(send, reportInterval)

		window.addEventListener('beforeunload', send, true)

		load(this.report)

        console.log('Web Monitor started!')

		return this
	}
}


module.exports = monitor
