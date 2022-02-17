type IComponentArgument = number | IComponent
interface IComponent {
    value: number
}
export class Add implements IComponent {
    #first: IComponentArgument
    #last: IComponentArgument
    value:number
    constructor(first: IComponentArgument, last: IComponentArgument) {
        if (typeof first === 'object') {
            this.#first = first.value
        } else {
            this.#first = first
        }
        if (typeof last === 'object') {
            this.#last = last.value
        } else {
            this.#last = last
        }
        this.value = this.#first + this.#last
    }
}
export class Sub implements IComponent {
    #first: IComponentArgument
    #last: IComponentArgument
    value:number
    constructor(first: IComponentArgument, last: IComponentArgument) {
        if (typeof first === 'object') {
            this.#first = first.value
        } else {
            this.#first = first
        }
        if (typeof last === 'object') {
            this.#last = last.value
        } else {
            this.#last = last
        }
        this.value = this.#first - this.#last
    }
}
