import { describe, test, expect } from "@jest/globals";
import {ConcreteMediator, Colleague2, Colleague1} from '../src/behavioral/Mediator'
describe('Mediator', () => {
    test('should call time 1', () => {
        const m = new ConcreteMediator()
        const c1 = new Colleague1(m)
        const c2 = new Colleague2(m)
        c1.send('123')
        expect(c2.notify).toBeCalledTimes(1)
    })
})