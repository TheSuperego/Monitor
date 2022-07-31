let timer: number
let setTimer: (callback: () => void, ms: number) => void
let clearTimer: () => void

if (!!window.requestIdleCallback) {
    setTimer = (callback, ms) => {
        timer = window.requestIdleCallback(callback, { timeout: ms })
    }
    clearTimer = () => {
        window.cancelIdleCallback(timer)
    }
} else {
    setTimer = (callback, ms) => {
        timer = window.setTimeout(callback, ms)
    }
    clearTimer = () => {
        window.clearTimeout(timer)
    }
}

export { setTimer, clearTimer }
