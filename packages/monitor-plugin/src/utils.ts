export function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

export function randomUUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function mixinBefore<
    T extends { [key in K]: (...args: unknown[]) => unknown },
    K extends keyof T
>(parentObject: T, propertyName: K, fn: (...args: unknown[]) => void) {
    const origin = parentObject[propertyName]
    parentObject[propertyName] = ((...args: unknown[]) => {
        fn(args)
        return origin.apply(parentObject, args)
    }) as any
    return function restore() {
        parentObject[propertyName] = origin
    }
}
