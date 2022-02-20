interface IIterator {
    next (): IIterator
    hasNext (): boolean
}
export default class IteratorConcept implements IIterator {
    next(): IIterator {
        if (this.hasNext()) {
            this.index++
            return this.getCurrent()
        } else {
            return null
        }
    }
    hasNext(): boolean {
        return Boolean(this.aggregates[this.index + 1])
    }
    getCurrent():IIterator {
        return this.aggregates[this.index]
    }
    aggregates: IIterator[]
    index: number
    constructor (aggregates: IIterator[]) {
        this.aggregates = aggregates
        this.index = 0
    }
}