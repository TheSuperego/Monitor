import { ff } from "./fade"

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
    ff(() => {
        parentObject[propertyName] = origin
    })
}

type EventTargetMap<T> = T extends Window
    ? WindowEventMap
    : T extends Document
    ? DocumentEventMap
    : never

export function addEventListener<T extends EventTarget, TYPE extends string>(
    eventTarget: T,
    type: TYPE,
    listener: (EventTargetMap<T> extends [never]
        ? EventListenerOrEventListenerObject
        : TYPE extends keyof EventTargetMap<T>
        ? (this: T, ev: EventTargetMap<T>[TYPE]) => unknown
        : EventListenerOrEventListenerObject) &
        EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
) {
    eventTarget.addEventListener(type, listener, options)
    ff(() => {
        eventTarget.removeEventListener(type, listener, options)
    })
}
