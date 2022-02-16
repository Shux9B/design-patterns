import { describe, test, expect } from "@jest/globals";
import AbstractFactoryPattern from '../src/creational/AbstractFactoryPattern'
describe('abstract factory', () => {
    test('should return ConcreteProductA', () => {
        const product1 = AbstractFactoryPattern.create('concretea')
        expect(product1.name).toBe('ConcreteProductA')

    })
    test('should return ConreteProductB', () => {
        const product2 = AbstractFactoryPattern.create('concreteb')
        expect(product2.name).toBe('ConcreteProductB')

    })
    test('should return ConcreteProductC', () => {
        const product3 = AbstractFactoryPattern.create('concretec')
        expect(product3.name).toBe('ConcreteProductC')
    })
    test('should return RebarProductA', () => {
        const product1 = AbstractFactoryPattern.create('rebara')
        expect(product1.name).toBe('RebarProductA')

    })
    test('should return RebarProductB', () => {
        const product2 = AbstractFactoryPattern.create('rebarb')
        expect(product2.name).toBe('RebarProductB')

    })
    test('should return RebarProductC', () => {
        const product3 = AbstractFactoryPattern.create('rebarc')
        expect(product3.name).toBe('RebarProductC')
    })
})