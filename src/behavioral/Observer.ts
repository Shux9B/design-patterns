interface IObservable {
    subscribe(observer: IObserver): void
    unSubscribe(observer: IObserver): void
    notify(...args: unknown[]): void
}
interface IObserver {
    notify(...args:unknown[]):void
}
export class Subject implements IObservable {
    #observers: Set<IObserver>
    constructor() {
        this.#observers = new Set()
    }
    subscribe(oberver: IObserver) {
        this.#observers.add(oberver)
    }
    unSubscribe(observer: IObserver) {
        this.#observers.delete(observer)
    }
    notify(...args: unknown[]) {
        this.#observers.forEach(observer => {
            observer.notify(...args)
        })
    }
}
export class Observer implements IObserver {
    #id: number
    constructor (observable: IObservable) {
        this.#id = counter++
        observable.subscribe(this)
    }
    notify(...args: unknown[]) {
        console.log(`observer_${this.#id} received ${JSON.stringify(args)}`)
    }
}
let counter = 1
