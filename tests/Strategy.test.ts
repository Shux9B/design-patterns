import { describe, test, expect } from "@jest/globals";
import {Strategy1, Strategy2, ObjectContext} from '../src/behavioral/Strategy'
describe('Memento', () => {
    test('should return Strategy1', () => {
       const context = new ObjectContext()
       expect(context.request(Strategy1).method()).toBe('Strategy1')
    })
    test('should return Strategy2', () => {
        const context = new ObjectContext()
        expect(context.request(Strategy2).method()).toBe('Strategy2')
    })
})