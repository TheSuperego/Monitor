export function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

export function randomUUID() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}
