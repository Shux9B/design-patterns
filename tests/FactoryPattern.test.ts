import { describe, test, expect } from "@jest/globals";
import FactoryPattern from '../src/creational/FactoryPattern'
describe('factory', () => {
    test('should return ConcreteProductA', () => {
        const product1 = FactoryPattern.create('a')
        expect(product1.name).toBe('ConcreteProductA')

    })
    test('should return ConcreteProductB', () => {
        const product2 = FactoryPattern.create('b')
        expect(product2.name).toBe('ConcreteProductB')

    })
    test('should return ConcreteProductC', () => {
        const product3 = FactoryPattern.create('c')
        expect(product3.name).toBe('ConcreteProductC')
    })
})