import { describe, test, expect } from "@jest/globals";
import { Sub, Add } from '../src/structural/DecoratorExample'
describe('Decorator', () => {
    test('should return 3', () => {
        const op1 = new Sub(4, 1)
        expect(op1.value).toBe(3)
        const op2 = new Add(2, 1)
        expect(op2.value).toBe(3)
    })
    test('should return 3 multiple oprator', () => {
        const op1 = new Sub(new Add(2, 2), 1)
        expect(op1.value).toBe(3)
        const op2 = new Add(2, new Sub(5, 4))
        expect(op2.value).toBe(3)
    })
    test('should return 3 complex oprator', () => {
        const op1 = new Sub(new Add(2, 2), new Sub(5, 4))
        expect(op1.value).toBe(3)
        const op2 = new Add(new Sub(4, 2), new Sub(5, 4))
        expect(op2.value).toBe(3)
    })
})