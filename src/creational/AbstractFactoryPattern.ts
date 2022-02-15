// 允许基于某种逻辑动态创建实例类型,便与扩展

interface IProduct {
    name:string
}
class RebarProduct implements IProduct {
    name = 'Rebar'
}
class RebarProductA extends RebarProduct {
    constructor() {
        super()
        this.name = 'RebarProductA'
    }
}
class RebarProductB extends RebarProduct {
    constructor() {
        super()
        this.name = 'RebarProductB'
    }
}
class RebarProductC extends RebarProduct {
    constructor() {
        super()
        this.name = 'RebarProductC'
    }
}
class RebarFactory {
    static create (RebarName:string):RebarProduct {
        switch(RebarName) {
            case 'a': return RebarProductA; break;
            case 'b': return RebarProductB; break;
            case 'c': return RebarProductC; break;
        }
    }
}

import ConcreteFactory from './FactoryPattern'

export default class MaterialsFactory {
    static create(materialName:string):IProduct {
        if (['rebara','rebarb','rebarc'].includes(materialName)) {
            return RebarFactory.create(materialName.replace('rebar', ''))
        }
        if (['concretea','concreteb','concretec'].includes(materialName)) {
            return ConcreteFactory.create(materialName.replace('concrete', ''))
        }
    }
}