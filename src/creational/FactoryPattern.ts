// 允许基于某种逻辑动态创建实例类型,便与扩展

interface IProduct {
    name:string
}
class ConcreteProduct implements IProduct {
    name = 'Concrete'
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}
export default class ConcreteFactory {
    static create (concreteName:string):ConcreteProduct {
        switch(concreteName) {
            case 'a': return ConcreteProductA; break;
            case 'b': return ConcreteProductB; break;
            case 'c': return ConcreteProductC; break;
        }
    }
}

