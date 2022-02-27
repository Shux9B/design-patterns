// TODO 需要一更更好的事例来学习这个模式
interface IAbstractExpression {
    interPret(): number
}
class Numeral implements IAbstractExpression {
    value: number
    constructor(value: string) {
        this.value = parseInt(value)
    }
    interPret(): number {
        return this.value
    }
}
class Add implements IAbstractExpression {
    left: IAbstractExpression
    right: IAbstractExpression
    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }
    interPret(): number {
        return this.left.interPret() + this.right.interPret()
    }
}
class Sub implements IAbstractExpression {
    left: IAbstractExpression
    right: IAbstractExpression
    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }
    interPret(): number {
        return this.left.interPret() - this.right.interPret()
    }
}