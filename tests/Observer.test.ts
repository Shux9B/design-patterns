import { describe, test, expect } from "@jest/globals";
import {Observer, Subject} from '../src/behavioral/Observer'
describe('Observer', () => {
    test('should be called', () => {
        const subject = new Subject()
        const observer_1 = new Observer(subject)
        observer_1.notify = jest.fn()
        const observer_2 = new Observer(subject)
        observer_2.notify = jest.fn()
        subject.notify("first notify", [1,2,3])
        expect(observer_1.notify).toBeCalledTimes(1)
        expect(observer_2.notify).toBeCalledTimes(1)
        subject.unSubscribe(observer_2)
        subject.notify("second notification", {a:1,b:2,c:3})
        expect(observer_1.notify).toBeCalledTimes(2)
        expect(observer_2.notify).toBeCalledTimes(1)
    })
})