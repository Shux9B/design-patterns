import { describe, test, expect } from "@jest/globals";
import {A, B, A2B, B2A} from '../src/structural/Adapter'
describe('Builder', () => {
    test('should return method b', () => {
        const instance = new A()
        const result = new A2B(instance)
        expect(result.methodB()).toEqual('method a')
    })
    test('should return method a', () => {
        const instance = new B()
        const result = new B2A(instance)
        expect(result.methodA()).toEqual('method b')
    })
})