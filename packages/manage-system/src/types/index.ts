




export interface LoggerObject {
    log_id: string
    log_input: string
    log_output: string
    log_message: string
}

export interface ApiInterface {

}

export interface GetApiInterface {

}

export interface ReportApiInterface {

}

export interface FCP_Object {
    pageURL: string
    durationTime: number
}

export interface FP_Object {
    pageURL: string
    durationTime: number
}

export interface XHR_Object {
    status: number
    startTime: number
    durationTime: number
    url: string
    method: string
    success: boolean
}

export interface FET_Object {
    status: number
    startTime: number
    durationTime: number
    url: string
    method: string
    success: boolean

}

export interface FPS_Object {
    frames: number
    pageUrl: string
}

export interface LCP_Object {
    pageURL: string
    startTime: number
    durationTime: number
    size: number
    loadTime: number
}

export interface CLS_Object {

}

export interface BFC_Object {

}

export interface RES_Object {
    resourceName: string
    resourceType: string
    durationTime: number
    dnsTime: number
    tcpTime: number
    redirectTime: number
    ttfb: number
    protocol: string
    responseBodySize: number
    responseHeaderSize: number
    resourceSize: number
    isCache: boolean
    startTime: number
}

export interface LOAD_Object {
    pageURL: string
    startTime: number
    subType: object
}

export interface PerformanceObject {
    fcp: FCP_Object
    fp: FP_Object
    xhr: XHR_Object
    fet: FET_Object
    fps: FPS_Object
    lcp: LCP_Object
    cls: CLS_Object,
    bfc: BFC_Object,
    res: RES_Object,
    load: LOAD_Object,
}


