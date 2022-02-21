class Memento {
    state: string
    constructor (stare: string) {
        this.state = stare
    }
}
export class Originator {
    #state: string
    constructor () {
        this.#state = ''
    }
    public get state():string {
        return this.#state
    }
    public set state(value:string) {
        this.#state = value
        console.log(`Originator: set state to ${value}`)
    }
    public get memento():Memento {
        return new Memento(this.#state)
    }
    public set memento(value: Memento) {
        this.#state = value.state
    }
}
export class CareTaker {
    #originator: Originator
    #mementos: Memento[]
    constructor(originator: Originator) {
        this.#originator = originator
        this.#mementos = []
    }
    create () {
        const memento = this.#originator.memento
        this.#mementos.push(memento)
    }
    restore (index: number) {
        const memento = this.#mementos[index]
        this.#originator.memento = memento
    }
}