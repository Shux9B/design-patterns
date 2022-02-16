import { describe, test, expect } from "@jest/globals";
import Certi from '../src/creational/Prototype'
describe('Prototype', () => {
    test('should return same refer', () => {
        const cer1 = new Certi('張三')
        expect(cer1.grant()).toBe('張三同学：在2016学年第一学期中表现优秀，被评为三好学生')
        const cer2 = cer1.clone()
        cer2.name = '王五'
        expect(cer2.grant()).toBe('王五同学：在2016学年第一学期中表现优秀，被评为三好学生')
        expect(cer1.grant()).toBe('張三同学：在2016学年第一学期中表现优秀，被评为三好学生')
        expect(cer1.info).toBe(cer1.info)
    })
})