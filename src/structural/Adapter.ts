interface BaseA {
    methodA (): string
}
interface BaseB {
    methodB (): string
}
export class A implements BaseA {
    methodA(): string {
        return "method a"
    }
}
export class B implements BaseB {
    methodB(): string {
        return "method b"
    }
}
export class B2A implements A {
    #obj:B
    constructor (obj: B) {
        this.#obj = obj
    }
    methodA(): string {
       return this.#obj.methodB()
    }
}
export class A2B implements B {
    #obj:A
    constructor (obj: A) {
        this.#obj = obj
    }
    methodB(): string {
       return this.#obj.methodA()
    }
}