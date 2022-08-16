export interface Schema {
    consoleError: ConsoleError
    jsError: JsError
    promiseError: PromiseError
    resourceError: ResourceError
    vueError: VueError
}

/**
 * ConsoleError
 */
export interface ConsoleError {
    errData: string[]
    pageURL: string
    startTime: number
}

/**
 * JsError
 */
export interface JsError {
    column: number
    error: string
    line: number
    msg: string
    pageURL: string
    startTime: number
}

/**
 * PromiseError
 */
export interface PromiseError {
    pageURL: string
    /**
     * PromiseRejectionEvent.reason?.stack
     */
    reason: null | string
    startTime: number
}

/**
 * ResourceError
 */
export interface ResourceError {
    /**
     * target.outerHTML
     */
    html: string
    pageURL: string
    resourceType: string
    startTime: number
    /**
     * target.src || target.href
     */
    url: string
}

/**
 * VueError
 */
export interface VueError {
    error: { [key: string]: any }
    info: string
    pageURL: string
    startTime: number
}
