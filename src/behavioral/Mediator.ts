/**
 * 中介模式，需要一个更好的实例进行理解
 * 他跟facade+obsever的区别是啥？
 */
interface Mediator {
    send(msg:string, colleague: Colleague):void
    colleague1:Colleague
    colleague2:Colleague

}
interface Colleague {
    mediator: Mediator,
    notify(msg:string):void,
    send(msg:string):void,
}

export class Colleague1 implements Colleague {
    mediator: Mediator;
    constructor(me:Mediator) {
        this.mediator = me
        this.mediator.colleague1 = this
    }
    send(msg:string): void {
        this.mediator.send(msg, this)
    }
    notify = jest.fn()
}
export class Colleague2 implements Colleague {
    mediator: Mediator;
    constructor(me:Mediator) {
        this.mediator = me
        this.mediator.colleague2 = this
    }
    send(msg: string): void {
        this.mediator.send(msg, this)
    }
    notify = jest.fn()
}
export class ConcreteMediator implements Mediator {
    send(msg:string, colleague: Colleague): void {
       if (colleague === this.colleague1) {
            this.colleague2.notify(msg)
       } else {
            this.colleague1.notify(msg)
       }
    }
    colleague1:Colleague1
    colleague2:Colleague2

}