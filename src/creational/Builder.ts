/**
 * 假設以元素周期表業作爲builder
 * 每個Director都是現實物質，由不同的元素組成
 */
class Product {
    parts: string[] = []
}
interface IBuilder {
    buildPartA(): this
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}
class Builder implements IBuilder {
    product: Product
    constructor() {
        this.product = new Product()
    }
    buildPartA(): this {
        this.product.parts.push('a')
        return this
    }
    buildPartB(): this {
        this.product.parts.push('b')
        return this
    }
    buildPartC(): this {
        this.product.parts.push('c')
        return this
    }
    getResult(): Product {
        return this.product
    }
}
export default class Director {
    static construct () {
        return new Builder().buildPartA().buildPartB().buildPartC().getResult()
    }
}