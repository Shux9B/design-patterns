import { describe, test, expect } from "@jest/globals";
import {Part, TotalValue} from '../src/behavioral/Visitor'
describe('Visitor', () => {
    test('should return 100', () => {
        const part = new Part('a', 10)
        const part1 = new Part('b',20,part)
        const part2 = new Part('c', 50, part)
        const part3 = new Part('d', 20, part2)
        const totalValue = new TotalValue()
        part.accept(totalValue)
        expect(totalValue.total).toBe(100)
    })
})