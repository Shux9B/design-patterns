import { describe, test, expect } from "@jest/globals";
import ChainOfResponsibility from '../src/behavioral/ChainOfResponsibility'
describe('ChainOfResponsibility', () => {
    test('should return number', () => {
        const payload = 1
        const CHAIN = new ChainOfResponsibility()
        expect(typeof CHAIN.start(payload)).toBe('number')

    })
})