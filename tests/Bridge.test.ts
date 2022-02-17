import { describe, test, expect } from "@jest/globals";
import {SuperEngine, SuperWheel, NormalWheel, NormalEngine, default as Car} from '../src/structural/Bridge'
describe('Builder', () => {
    test('should return normal', () => {
        const instance = new Car()
        expect(instance.check('engine')).toEqual('normal Engine')
        expect(instance.check('wheel')).toEqual('normal wheel')
    })
    test('should return normal & super', () => {
        const instance = new Car()
        let superEngine = new SuperEngine()
        instance.add(superEngine)
        expect(instance.check('wheel')).toEqual('normal wheel')
        expect(instance.check('engine')).toEqual('super Engine')
    })
    test('should return super & nornal', () => {
        const instance = new Car()
        let superWheel = new SuperWheel()
        instance.add(superWheel)
        expect(instance.check('wheel')).toEqual('super wheel')
        expect(instance.check('engine')).toEqual('normal Engine')
    })
    test('should return super & super', () => {
        const instance = new Car()
        let superEngine = new SuperEngine()
        let superWheel = new SuperWheel()
        instance.add(superEngine)
        instance.add(superWheel)
        expect(instance.check('engine')).toEqual('super Engine')
        expect(instance.check('wheel')).toEqual('super wheel')
    })
})