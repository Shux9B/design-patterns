interface IComponent {
    method(): string
}
export class Component implements IComponent {
    method(): string {
        return 'component method'
    }
}
export default class Decorator implements IComponent {
    #object: IComponent
    constructor(obj: IComponent) {
        this.#object = obj
    }
    method(): string {
        return `Decorator Method(${this.#object.method()})`
    }
}