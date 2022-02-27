import { describe, test, expect } from "@jest/globals";
import Flyweight from '../src/structural/Flyweight'
describe('Flyweight', () => {
    test('should return 2', () => {
        const school = new Flyweight()
        const schoole1 = school.createSchool('1中')
        const schoole2 = school.createSchool('1中')
        const schoole3 = school.createSchool('1中')
        const schoole4 = school.createSchool('1中')
        schoole1.join()
        schoole2.join()
        schoole3.join()
        schoole4.join()
        expect(schoole1.join).toBeCalledTimes(4)
    })
})