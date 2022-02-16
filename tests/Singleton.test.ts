import { describe, test, expect } from "@jest/globals";
import Singleton from '../src/creational/Singleton'
describe('Builder', () => {
    test('should return same refer', () => {
        const instance1 = new Singleton(1)
        const instance2 = new Singleton(2)
        expect(instance1.id).toBe(1)
        expect(instance2.id).toBe(1)
        expect(instance1).toBe(instance2)
    })
})