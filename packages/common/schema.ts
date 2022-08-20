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
    /**
     * 错误数据，传递给 console.error 的参数 ...args
     */
    errorData: string[]
    /**
     * 页面链接
     */
    href: string
    /**
     * 发生时间
     */
    startTime: number
}

/**
 * JsError
 */
export interface JsError {
    /**
     * 列号
     */
    column: number
    /**
     * 页面链接
     */
    href: string
    /**
     * 行号
     */
    line: number
    /**
     * 错误信息
     */
    message: string
    /**
     * 错误堆栈
     */
    stack: string
    /**
     * 发生时间，ms
     */
    startTime: number
}

/**
 * PromiseError
 */
export interface PromiseError {
    /**
     * 页面链接
     */
    href: string
    /**
     * 错误堆栈
     */
    stack: string
    /**
     * 发生时间，ms
     */
    startTime: number
}

/**
 * ResourceError
 */
export interface ResourceError {
    /**
     * 页面链接
     */
    href: string
    /**
     * html代码，target.outerHTML
     */
    html: string
    /**
     * 资源类型，target.tagName
     */
    resourceType: string
    /**
     * 资源来源，target.src || target.href
     */
    source: string
    /**
     * 发生时间，ms
     */
    startTime: number
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
