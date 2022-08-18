// 卸载插件时释放所有资源和移除所有 EventListener

const fades: (() => void)[] = []

export function ff(dispose: () => void) {
    fades.push(dispose)
}

export function fade() {
    fades.forEach((f) => f())
    fades.length = 0
}
