import { describe, test, expect } from "@jest/globals";
import Iterator from '../src/behavioral/Iterator'
describe('Iterator', () => {
    test('should run 4 times', () => {
        const instance1 = new Iterator([])
        const instance2 = new Iterator([])
        const instance3 = new Iterator([])
        const instance4 = new Iterator(null)
        const excutor = new Iterator([instance1, instance2, instance3, instance4])
        expect(excutor.next()).not.toBeNull()
        expect(excutor.next()).not.toBeNull()
        expect(excutor.next()).not.toBeNull()
        expect(excutor.next()).toBeNull()
    })
})