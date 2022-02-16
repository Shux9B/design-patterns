import { describe, test, expect } from "@jest/globals";
import Builder from '../src/creational/Builder'
describe('Builder', () => {
    test('should return [a,b,c]', () => {
        const product = Builder.construct()
        expect(product.parts).toEqual(['a', 'b', 'c'])

    })
})