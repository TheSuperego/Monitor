import { deepCopy } from './utils'

const cache: ReportData[] = []

export interface ReportData {
    [key: string]: any
}

export function getCache() {
    return deepCopy(cache)
}

export function addCache(data: ReportData) {
    cache.push(data)
}

export function clearCache() {
    cache.length = 0
}

export function isCacheEmpty() {
    return cache.length === 0
}
